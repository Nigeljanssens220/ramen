import * as z from 'zod'

export const createStorySchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
  userAddress: z.string(),
  columnId: z.string().cuid(),
})
export type CreateStorySchema = z.infer<typeof createStorySchema>
