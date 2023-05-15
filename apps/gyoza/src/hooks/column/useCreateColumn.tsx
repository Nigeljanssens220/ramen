import { CreateColumnSchema } from '@/server/api/schemas/column/createColumn'
import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useCreateColumn = () => {
  const router = useRouter()
  const createColumn = api.column.create.useMutation()

  const handleCreateColumn = useCallback(({ title, userAddress }: CreateColumnSchema) => {
    createColumn.mutate(
      {
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

  return { createColumn, handleCreateColumn }
}
