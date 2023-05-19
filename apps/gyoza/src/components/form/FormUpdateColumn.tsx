import { UpdateColumnSchema } from '@/server/api/schemas/column/updateColumn'
import { Button, Spinner } from '@ramen/ui'
import { useFormContext } from 'react-hook-form'
import { FormTextField } from './elements'

interface FormUpdateColumnProps {
  onSubmit: (data: UpdateColumnSchema) => void
  submitDisabled?: boolean
  mutationLoading?: boolean
}

export const FormUpdateColumn: React.FC<FormUpdateColumnProps> = ({ onSubmit, submitDisabled, mutationLoading }) => {
  const { handleSubmit } = useFormContext<UpdateColumnSchema>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <FormTextField name="title" label="Title" />
      <Button disabled={submitDisabled} type="submit">
        {mutationLoading ? <Spinner /> : 'Update'}
      </Button>
    </form>
  )
}
