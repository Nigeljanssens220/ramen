import { useUpdateColumn } from '@/hooks/column/useUpdateColumn'
import { UpdateColumnSchema, updateColumnSchema } from '@/server/api/schemas/column/updateColumn'
import { PencilIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { Column } from '@prisma/client'
import { Button, Modal } from '@ramen/ui'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormUpdateColumn } from '../form'

export interface UpdateColumnModalProps {
  column: Column
}

export const UpdateColumnModal: React.FC<UpdateColumnModalProps> = ({ column }) => {
  const [open, setOpen] = useState(false)
  const methods = useForm<UpdateColumnSchema>({
    resolver: zodResolver(updateColumnSchema),
    defaultValues: { id: column.id, title: column.title },
  })

  const {
    updateColumn: { isLoading },
    handleUpdateColumn,
  } = useUpdateColumn()

  const onSubmit = useCallback(async (data: UpdateColumnSchema) => {
    console.log(data)
    await handleUpdateColumn(data)
    setOpen(false)
  }, [])

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <PencilIcon className="mr-2 h-5 w-5" />
          Edit column
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new column</Modal.Title>
        <FormProvider {...methods}>
          <Modal.Description asChild>
            <FormUpdateColumn onSubmit={onSubmit} submitDisabled={isDisabled} mutationLoading={isLoading} />
          </Modal.Description>
        </FormProvider>
      </Modal.Content>
    </Modal>
  )
}
