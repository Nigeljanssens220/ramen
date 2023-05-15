import * as z from 'zod'

export const createColumnSchema = z.object({
  title: z.string().min(1).max(100),
  userAddress: z.string().startsWith('0x'),
})
export type CreateColumnSchema = z.infer<typeof createColumnSchema>
