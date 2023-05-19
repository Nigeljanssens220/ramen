import { UpdateStorySchema } from '@/server/api/schemas/story/updateStory'
import { Button, Spinner } from '@ramen/ui'
import { useFormContext } from 'react-hook-form'
import { FormTextArea, FormTextField } from './elements'

interface FormUpdateStoryProps {
  onSubmit: (data: UpdateStorySchema) => void
  submitDisabled?: boolean
  mutationLoading?: boolean
}

export const FormUpdateStory: React.FC<FormUpdateStoryProps> = ({ onSubmit, submitDisabled, mutationLoading }) => {
  const { handleSubmit } = useFormContext<UpdateStorySchema>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <FormTextField name="title" label="Title" />
      <FormTextArea name="content" label="Description" />
      <Button disabled={submitDisabled} type="submit">
        {mutationLoading ? <Spinner /> : 'Update'}
      </Button>
    </form>
  )
}
