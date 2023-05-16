import { UpdateColumnSchema } from '@/server/api/schemas/column/updateColumn'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useUpdateColumn = () => {
  const updateColumn = api.column.update.useMutation()
  const utils = api.useContext()

  const handleUpdateColumn = useCallback(async ({ id, title }: UpdateColumnSchema) => {
    updateColumn.mutateAsync(
      {
        id,
        title,
      },
      {
        onSuccess: () => {
          utils.column.invalidate()
        },
      }
    )
  }, [])

  return { updateColumn, handleUpdateColumn }
}
