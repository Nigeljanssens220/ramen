import { useCreateStory } from '@/hooks/story/useCreateStory'
import { CreateStorySchema, createStorySchema } from '@/server/api/schemas/story/createStory'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Modal } from '@ramen/ui'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import { FormCreateStory } from '../form'

export interface CreateStoryModalProps {
  columnId: string
}

export const CreateStoryModal: React.FC<CreateStoryModalProps> = ({ columnId }) => {
  const [open, setOpen] = useState(false)
  const { address } = useAccount()
  const methods = useForm<CreateStorySchema>({
    resolver: zodResolver(createStorySchema),
    defaultValues: { columnId, userAddress: address },
  })
  const {
    createStory: { isLoading },
    handleCreateStory,
  } = useCreateStory()

  const onSubmit = useCallback(async (data: CreateStorySchema) => {
    await handleCreateStory(data)
    setOpen(false)
  }, [])

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

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
        <FormProvider {...methods}>
          <Modal.Description asChild>
            <FormCreateStory onSubmit={onSubmit} submitDisabled={isDisabled} mutationLoading={isLoading} />
          </Modal.Description>
        </FormProvider>
      </Modal.Content>
    </Modal>
  )
}
