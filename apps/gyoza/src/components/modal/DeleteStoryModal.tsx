import { useDeleteStory } from '@/hooks/story/useDeleteStory'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'
import Button from '../button/Button'
import Spinner from '../spinner'
import Typography from '../typography/Typography'
import Modal from './Modal'

interface DeleteStoryModalProps {
  storyId: number
}

const DeleteStoryModal: React.FC<DeleteStoryModalProps> = ({ storyId }) => {
  const [open, setOpen] = useState(false)
  const { deleteStory: isLoading, handleDeleteStory } = useDeleteStory()

  const handleDelete = useCallback(async () => {
    await handleDeleteStory({ id: storyId })
    setOpen(false)
  }, [storyId])

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <TrashIcon className="mr-2 h-4 w-4" />
          Delete story
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Delete story</Modal.Title>
        <Modal.Description>
          <Typography as="span" variant="md/regular" className="!text-background">
            Are you sure you want to delete this story? This action cannot be undone.
          </Typography>
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Cancel</Modal.Close>
          <Button onClick={handleDelete}>{isLoading ? <Spinner /> : 'Delete'}</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default DeleteStoryModal
