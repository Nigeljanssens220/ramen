import { CreateStorySchema } from '@/server/api/schemas/story/createStory'
import { Button, Spinner } from '@ramen/ui'
import { useFormContext } from 'react-hook-form'
import { FormTextArea, FormTextField } from './elements'

interface FormCreateStoryProps {
  onSubmit: (data: CreateStorySchema) => void
  submitDisabled?: boolean
  mutationLoading?: boolean
}

export const FormCreateStory: React.FC<FormCreateStoryProps> = ({ onSubmit, submitDisabled, mutationLoading }) => {
  const { handleSubmit } = useFormContext<CreateStorySchema>()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
      <FormTextField name="title" label="Title" />
      <FormTextArea name="content" label="Description" />
      <Button disabled={submitDisabled} type="submit">
        {mutationLoading ? <Spinner /> : 'Create'}
      </Button>
    </form>
  )
}
