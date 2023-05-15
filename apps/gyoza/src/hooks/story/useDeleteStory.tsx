import { DeleteStorySchema } from '@/server/api/schemas/story/deleteStory'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useDeleteStory = () => {
  const deleteStory = api.story.delete.useMutation()
  const utils = api.useContext()

  const handleDeleteStory = useCallback(async ({ id }: DeleteStorySchema) => {
    deleteStory.mutateAsync(
      {
        id,
      },
      {
        onSuccess: () => {
          utils.column.invalidate()
        },
      }
    )
  }, [])

  return { deleteStory, handleDeleteStory }
}
