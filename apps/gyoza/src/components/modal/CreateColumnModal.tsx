import { useCreateColumn } from '@/hooks/column/useCreateColumn'
import { CreateColumnSchema, createColumnSchema } from '@/server/api/schemas/column/createColumn'
import { PlusIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import Button from '../button/Button'
import FormTextField from '../form/FormTextField'
import Spinner from '../spinner'
import Modal from './Modal'

const CreateColumnModal: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { address } = useAccount()
  const methods = useForm<CreateColumnSchema>({ resolver: zodResolver(createColumnSchema) })
  const {
    createColumn: { isLoading },
    handleCreateColumn,
  } = useCreateColumn()

  // disable the button if the form is not completely filled in or the mutation is loading
  const isDisabled = !methods.formState.isValid

  // Set the default values for the form fields
  useEffect(() => {
    methods.setValue('userAddress', address)
  }, [address, methods])

  const onSubmit = useCallback(async (data: CreateColumnSchema) => {
    await handleCreateColumn(data)
    setOpen(false)
  }, [])

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <Modal.Trigger asChild>
        <Button variant="md/primary">
          <PlusIcon className="mr-2 h-5 w-5" />
          Create column
        </Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>Create new column</Modal.Title>
        <Modal.Description>
          <div>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
                <FormTextField name="title" label="Title" />
                <Button disabled={isDisabled} type="submit">
                  {isLoading ? <Spinner /> : 'Create'}
                </Button>
              </form>
            </FormProvider>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default CreateColumnModal
