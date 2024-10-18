import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { z } from 'zod';
import sharp from 'sharp';
import { db } from '@/db';

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: '4MB' } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      console.log('Middleware input:', input);
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        const { configId } = metadata.input;

        console.log('Upload complete. File metadata:', file);

        // Fetch the image from the URL
        const res = await fetch(file.url);
        if (!res.ok) {
          throw new Error(`Failed to fetch image from ${file.url}`);
        }

        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer); // Convert ArrayBuffer to Buffer

        if (!buffer || buffer.length === 0) {
          throw new Error('Fetched buffer is empty');
        }

        const imgMetadata = await sharp(buffer).metadata();
        const { width, height } = imgMetadata;

        console.log('Image metadata:', { width, height });

        if (!configId) {
          const configuration = await db.configuration.create({
            data: {
              imageUrl: file.url,
              height: height || 500,
              width: width || 500,
            },
          });
          console.log('New configuration created:', configuration);

          return { configId: configuration.id };
        } else {
          const updatedConfiguration = await db.configuration.update({
            where: { id: configId },
            data: { croppedImageUrl: file.url },
          });
          console.log('Configuration updated:', updatedConfiguration);

          return { configId: updatedConfiguration.id };
        }
      } catch (err) {
        console.error('Error during upload processing:', err);
        throw new Error('Failed to process image upload');
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
