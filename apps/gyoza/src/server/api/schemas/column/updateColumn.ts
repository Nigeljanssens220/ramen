import * as z from 'zod'

export const updateColumnSchema = z.object({
  title: z.string().min(1).max(100),
  userAddress: z.string(),
  id: z.string().cuid(),
})
export type UpdateColumnSchema = z.infer<typeof updateColumnSchema>
