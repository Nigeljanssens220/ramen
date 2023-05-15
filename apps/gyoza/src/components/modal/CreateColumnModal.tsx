import { useCreateColumn } from '@/hooks/column/useCreateColumn'
import { CreateColumnSchema, createColumnSchema } from '@/server/api/schemas/column/createColumn'
import { PlusIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import { Ring } from '@uiball/loaders'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import Button from '../button/Button'
import FormTextField from '../form/FormTextField'
import Modal from './Modal'

const CreateColumnModal: React.FC = () => {
  const { address } = useAccount()
  const {
    createColumn: { isLoading },
    handleCreateColumn,
  } = useCreateColumn()
  const methods = useForm<CreateColumnSchema>({ resolver: zodResolver(createColumnSchema) })

  // Set the default values for the form fields
  useEffect(() => {
    methods.setValue('userAddress', address)
  }, [address, methods])

  // disable the button if the form is not completely filled in or the mutation is loading
  // const isDisabled = !methods.formState.isValid

  return (
    <Modal>
      <Modal.Trigger asChild className="">
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
              <form onSubmit={methods.handleSubmit(handleCreateColumn)} className="flex flex-col gap-y-4">
                <FormTextField name="title" label="Title" />
                <Button type="submit">
                  {isLoading ? <Ring size={20} lineWeight={5} speed={2} color="#010101" /> : 'Create'}
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
