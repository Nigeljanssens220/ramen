import * as z from 'zod'

export const updateStorySchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
  userAddress: z.string(),
  columnId: z.string().cuid(),
})
export type UpdateStorySchema = z.infer<typeof updateStorySchema>
