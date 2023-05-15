import { CreateStorySchema } from '@/server/api/schemas/story/createStory'
import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useCreateStory = () => {
  const router = useRouter()
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
          router.reload()
        },
      }
    )
  }, [])

  return { createStory, handleCreateStory }
}
