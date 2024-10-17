'use client'

import { Progress } from '@/components/ui/progress'
import { useToast } from '@/components/ui/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'
import { Dialog } from '@headlessui/react' // Ensure this package is installed

const Page = () => {
  const { toast } = useToast()
  const [isDragOver, setIsDragOver] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false) // State for loading
  const [isVisualized, setIsVisualized] = useState<boolean>(false) // Track if visualized
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false) // State for modal
  const router = useRouter()

  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p) {
      setUploadProgress(p)
    },
  })

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setIsDragOver(false)

    toast({
      title: `${file.file.type} type is not supported.`,
      description: "Please choose a .AI image instead.",
      variant: "destructive"
    })
  }

  const onDropAccepted = (acceptedFiles: File[]) => {
    if (!isVisualized) {
      setIsModalOpen(true) // Open modal if not visualized
      return; // Prevent upload
    }
    startUpload(acceptedFiles, { configId: undefined })

    setIsDragOver(false)
  }

  const [isPending, startTransition] = useTransition()

  // Function to open the new URL with loading effect
  const openTshirtDesigner = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.open("https://threejs-t-shirt-main.vercel.app/", "_blank");
      setIsVisualized(true); // Set visualized state to true
      setIsLoading(false)
    }, 1000); // Simulate loading delay (e.g., 1 second)
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <div
      className={cn(
        'relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
        {
          'ring-blue-900/25 bg-blue-900/10': isDragOver,
        }
      )}>
      <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image/pdf': ['.pdf'],
            'image/svg': ['.svg'],
            'image/eps': ['.eps'],
            'image/ai': ['.ai'],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}>
          {({ getRootProps, getInputProps }) => (
            <div
              className='h-full w-full flex-1 flex flex-col items-center justify-center'
              {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' />
              ) : isUploading || isPending ? (
                <Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2' />
              ) : (
                <Image className='h-6 w-6 text-zinc-500 mb-2' />
              )}
              <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                {isUploading ? (
                  <div className='flex flex-col items-center'>
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className='mt-2 w-40 h-2 bg-gray-300'
                    />
                  </div>
                ) : isPending ? (
                  <div className='flex flex-col items-center'>
                    <p>Working some GATO MAGIC...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className='font-semibold'>Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold'>Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className='text-xs text-zinc-500'>EPS, SVG, AI, PDF</p>
              )}
            </div>
          )}
        </Dropzone>
        {/* Button to open the T-shirt designer */}
        <button
          onClick={openTshirtDesigner}
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-400 flex items-center justify-center">
          {isLoading ? (
            <>
              <Loader2 className='animate-spin h-4 w-4 mr-2' />
              One second please...
            </>
          ) : (
            'Visualize your design'
          )}
        </button>

        {/* Modal for warning */}
        <Dialog open={isModalOpen} onClose={closeModal} className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <Dialog.Overlay className="fixed inset-0 " />
            <div className="bg-white rounded-lg p-6 mx-4 max-w-sm text-center">
              <Dialog.Title className="text-lg font-bold">WAIT!</Dialog.Title>
              <Dialog.Description className="mt-2 text-sm">
              To maintain the quality of your submission, please visualize your design prior to uploading your logo.
              </Dialog.Description>
              <div className="mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-400">
                  OK
                </button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  )
}

export default Page

