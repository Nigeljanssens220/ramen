import { CreateColumnSchema } from '@/server/api/schemas/column/createColumn'
import { Button, Spinner } from '@ramen/ui'
import { useFormContext } from 'react-hook-form'
import { FormTextField } from './elements'

interface FormCreateColumnProps {
  onSubmit: (data: CreateColumnSchema) => void
  submitDisabled?: boolean
  mutationLoading?: boolean
}

export const FormCreateColumn: React.FC<FormCreateColumnProps> = ({ onSubmit, submitDisabled, mutationLoading }) => {
  const { handleSubmit } = useFormContext<CreateColumnSchema>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <FormTextField name="title" label="Title" />
      <Button disabled={submitDisabled} type="submit">
        {mutationLoading ? <Spinner /> : 'Create'}
      </Button>
    </form>
  )
}
