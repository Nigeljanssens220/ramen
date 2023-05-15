import { CreateColumnSchema } from '@/server/api/schemas/column/createColumn'
import { api } from '@/utils/api'
import { useCallback } from 'react'

export const useCreateColumn = () => {
  const createColumn = api.column.create.useMutation()
  const utils = api.useContext()

  const handleCreateColumn = useCallback(async ({ title, userAddress }: CreateColumnSchema) => {
    createColumn.mutateAsync(
      {
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

  return { createColumn, handleCreateColumn }
}
