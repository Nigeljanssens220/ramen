import * as z from 'zod'

export const createStorySchema = z.object({
  title: z.string({ required_error: 'je mams is mooi' }).min(1).max(100),
  content: z.string().min(1).max(1000),
  userAddress: z.string().startsWith('0x'),
  columnId: z.string().cuid(),
})
export type CreateStorySchema = z.infer<typeof createStorySchema>
