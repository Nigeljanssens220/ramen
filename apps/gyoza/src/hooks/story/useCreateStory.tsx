import { CreateStorySchema } from '@/server/api/schemas/story/createStory'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useCreateStory = () => {
  const createStory = api.story.create.useMutation()
  const utils = api.useContext()

  const handleCreateStory = useCallback(async ({ columnId, content, title, userAddress }: CreateStorySchema) => {
    createStory.mutateAsync(
      {
        columnId,
        content,
        title,
        userAddress,
      },
      {
        onSuccess: () => {
          utils.column.invalidate()
        },
      }
    )
  }, [])

  return { createStory, handleCreateStory }
}
