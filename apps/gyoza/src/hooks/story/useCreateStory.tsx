import { CreateStorySchema } from '@/server/api/schemas/story/createStory'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useCreateStory = () => {
  const createStory = api.story.create.useMutation()

  const handleCreateStory = useCallback(({ columnId, content, title, userAddress }: CreateStorySchema) => {
    createStory.mutate(
      {
        columnId,
        content,
        title,
        userAddress,
      },
      {
        onSuccess: () => {
          // TODO: invalidate Column cache
        },
      }
    )
  }, [])

  return { createStory, handleCreateStory }
}
