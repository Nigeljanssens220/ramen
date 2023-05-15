import { CreateStorySchema } from '@/server/api/schemas/story/createStory'
import { useFormContext } from 'react-hook-form'
import Button from '../button/Button'
import Spinner from '../spinner'
import FormTextArea from './elements/FormTextArea'
import FormTextField from './elements/FormTextField'

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
