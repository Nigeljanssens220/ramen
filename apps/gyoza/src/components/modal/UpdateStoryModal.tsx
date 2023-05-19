import { useUpdateStory } from '@/hooks/story/useUpdateStory'
import { UpdateStorySchema, updateStorySchema } from '@/server/api/schemas/story/updateStory'
import { PencilIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { Story } from '@prisma/client'
import { Button, Modal } from '@ramen/ui'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormUpdateStory } from '../form'

export interface UpdateStoryModalProps {
  story: Story
}

export const UpdateStoryModal: React.FC<UpdateStoryModalProps> = ({ story }) => {
  const [open, setOpen] = useState(false)
  const methods = useForm<UpdateStorySchema>({
    resolver: zodResolver(updateStorySchema),
    defaultValues: {
      id: story.id,
      title: story.title,
      content: story.content,
      columnId: story.columnId,
    },
  })

  const {
    updateStory: { isLoading },
    handleUpdateStory,
  } = useUpdateStory()

  const onSubmit = useCallback(async (data: UpdateStorySchema) => {
    await handleUpdateStory(data)
    setOpen(false)
  }, [])

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <PencilIcon className="mr-2 h-5 w-5" />
          Edit story
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new story</Modal.Title>
        <FormProvider {...methods}>
          <Modal.Description asChild>
            <FormUpdateStory onSubmit={onSubmit} submitDisabled={isDisabled} mutationLoading={isLoading} />
          </Modal.Description>
        </FormProvider>
      </Modal.Content>
    </Modal>
  )
}
