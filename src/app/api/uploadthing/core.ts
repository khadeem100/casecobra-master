import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';
import sharp from 'sharp';
import { db } from '@/db';

// Create Uploadthing instance
const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      console.log('Middleware input:', input); // Log middleware input
      return { input }; // Pass the input to the next function
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        // Extract the configId from metadata input
        const { configId } = metadata.input;

        console.log('Upload complete. File metadata:', file);
        
        // Fetch the uploaded file data from the URL
        const res = await fetch(file.url);
        if (!res.ok) {
          throw new Error(`Failed to fetch image from ${file.url}`);
        }

        const buffer = await res.arrayBuffer();

        // Use sharp to get image metadata
        const imgMetadata = await sharp(Buffer.from(buffer)).metadata();
        const { width, height } = imgMetadata;
        
        console.log('Image metadata:', { width, height });

        // If no configId, create a new configuration in the database
        if (!configId) {
          const configuration = await db.configuration.create({
            data: {
              imageUrl: file.url,
              height: height || 500,  // Default height
              width: width || 500,    // Default width
            },
          });
          console.log('New configuration created:', configuration);

          return { configId: configuration.id }; // Return the new configId
        } else {
          // Update the existing configuration with the cropped image URL
          const updatedConfiguration = await db.configuration.update({
            where: { id: configId },
            data: { croppedImageUrl: file.url },
          });
          console.log('Configuration updated:', updatedConfiguration);

          return { configId: updatedConfiguration.id }; // Return updated configId
        }
      } catch (err) {
        console.error('Error during upload processing:', err); // Log any errors
        throw new Error('Failed to process image upload');
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
