import { useDeleteColumn } from '@/hooks/column/useDeleteColumn'
import { TrashIcon } from '@heroicons/react/24/solid'
import { useCallback, useState } from 'react'
import Button from '../button/Button'
import Spinner from '../spinner'
import Typography from '../typography/Typography'
import Modal from './Modal'

interface DeleteColumnModalProps {
  columnId: string
}

const DeleteColumnModal: React.FC<DeleteColumnModalProps> = ({ columnId }) => {
  const [open, setOpen] = useState(false)
  const { deleteColumn: isLoading, handleDeleteColumn } = useDeleteColumn()

  const handleDelete = useCallback(async () => {
    await handleDeleteColumn({ id: columnId })
    setOpen(false)
  }, [columnId])

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <TrashIcon className="mr-2 h-4 w-4" />
          Delete column
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Delete column</Modal.Title>
        <Modal.Description>
          <Typography as="span" variant="md/regular" className="!text-background">
            Are you sure you want to delete this column? This action cannot be undone.
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

export default DeleteColumnModal
