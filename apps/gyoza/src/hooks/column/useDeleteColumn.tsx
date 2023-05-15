import { DeleteColumnSchema } from '@/server/api/schemas/column/deleteColumn'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useDeleteColumn = () => {
  const deleteColumn = api.column.delete.useMutation()
  const utils = api.useContext()

  const handleDeleteColumn = useCallback(async ({ id }: DeleteColumnSchema) => {
    deleteColumn.mutateAsync(
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

  return { deleteColumn, handleDeleteColumn }
}
