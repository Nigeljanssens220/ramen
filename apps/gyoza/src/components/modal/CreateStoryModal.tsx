import { useCreateStory } from '@/hooks/story/useCreateStory'
import { CreateStorySchema, createStorySchema } from '@/server/api/schemas/story/createStory'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import Button from '../button/Button'
import FormTextField from '../form/FormTextField'
import TextField from '../textfield/TextField'
import Modal from './Modal'

export interface CreateStoryModalProps {
  columnTitle: string
}

const CreateStoryModal: React.FC<CreateStoryModalProps> = ({ columnTitle }) => {
  const { address } = useAccount()
  const { createStory, handleCreateStory } = useCreateStory()
  const methods = useForm<CreateStorySchema>({ resolver: zodResolver(createStorySchema) })

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
              <TextField />
              <TextField />
            </FormProvider>
          </div>
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button onClick={handleCreateStory}>Create</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default CreateStoryModal
