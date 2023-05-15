import { useCreateStory } from '@/hooks/story/useCreateStory'
import { CreateStorySchema, createStorySchema } from '@/server/api/schemas/story/createStory'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import Button from '../button/Button'
import FormTextArea from '../form/FormTextArea'
import FormTextField from '../form/FormTextField'
import Modal from './Modal'

export interface CreateStoryModalProps {
  columnId: string
}

const CreateStoryModal: React.FC<CreateStoryModalProps> = ({ columnId }) => {
  const [open, setOpen] = useState(false)
  const { address } = useAccount()
  const methods = useForm<CreateStorySchema>({ resolver: zodResolver(createStorySchema) })
  const {
    createStory: { isLoading },
    handleCreateStory,
  } = useCreateStory()

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

  // Set the default values for the form fields
  useEffect(() => {
    methods.setValue('userAddress', address)
    methods.setValue('columnId', columnId)
  }, [address, columnId, methods])

  const onSubmit = useCallback(async (data: CreateStorySchema) => {
    await handleCreateStory(data)
    setOpen(false)
  }, [])

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <PlusSmallIcon className="mr-2 h-5 w-5" />
          Create story
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new story</Modal.Title>
        <Modal.Description>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <FormTextField name="title" label="Title" />
                <FormTextArea name="content" label="Description" />
                <Button disabled={isDisabled} type="submit">
                  Create
                </Button>
              </form>
            </FormProvider>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default CreateStoryModal
