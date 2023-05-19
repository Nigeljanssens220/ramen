import { useCreateColumn } from '@/hooks/column/useCreateColumn'
import { CreateColumnSchema, createColumnSchema } from '@/server/api/schemas/column/createColumn'
import { PlusSmallIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Modal } from '@ramen/ui'
import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import { FormCreateColumn } from '../form'

export const CreateColumnModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { address } = useAccount()
  const methods = useForm<CreateColumnSchema>({
    resolver: zodResolver(createColumnSchema),
    defaultValues: { userAddress: address },
  })
  const {
    createColumn: { isLoading },
    handleCreateColumn,
  } = useCreateColumn()

  const onSubmit = useCallback(async (data: CreateColumnSchema) => {
    await handleCreateColumn(data)
    setOpen(false)
  }, [])

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild className="w-full">
        <Button variant="md/base" className="hover:!bg-background hover:!bg-opacity-20">
          <PlusSmallIcon className="mr-2 h-5 w-5" />
          Create column
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new column</Modal.Title>
        <FormProvider {...methods}>
          <Modal.Description asChild>
            <FormCreateColumn onSubmit={onSubmit} submitDisabled={isDisabled} mutationLoading={isLoading} />
          </Modal.Description>
        </FormProvider>
      </Modal.Content>
    </Modal>
  )
}
