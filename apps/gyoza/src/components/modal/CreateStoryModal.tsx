import { useCreateStory } from '@/hooks/story/useCreateStory'
import { CreateStorySchema, createStorySchema } from '@/server/api/schemas/story/createStory'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
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
  const { address } = useAccount()
  const {
    createStory: { isLoading },
    handleCreateStory,
  } = useCreateStory()
  const methods = useForm<CreateStorySchema>({ resolver: zodResolver(createStorySchema) })

  // Set the default values for the form fields
  useEffect(() => {
    methods.setValue('userAddress', address)
    methods.setValue('columnId', columnId)
  }, [address, columnId, methods])

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid || isLoading

  return (
    <Modal>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          Create story
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new story</Modal.Title>
        <Modal.Description>
          <div className="flex flex-col gap-y-2">
            <FormProvider {...methods}>
              <FormTextField name="title" label="Title" />
              <FormTextArea name="content" label="Description" />
            </FormProvider>
          </div>
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button disabled={isDisabled} onClick={methods.handleSubmit(handleCreateStory)}>
            Create
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default CreateStoryModal
