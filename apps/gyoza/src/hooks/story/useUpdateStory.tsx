import { UpdateStorySchema } from '@/server/api/schemas/story/updateStory'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useUpdateStory = () => {
  const updateStory = api.story.update.useMutation()
  const utils = api.useContext()

  const handleUpdateStory = useCallback(async ({ id, title, content, columnId }: UpdateStorySchema) => {
    updateStory.mutateAsync(
      {
        id,
        title,
        content,
        columnId,
      },
      {
        onSuccess: () => {
          utils.column.invalidate()
        },
      }
    )
  }, [])

  return { updateStory, handleUpdateStory }
}
