import * as z from 'zod'

export const deleteStorySchema = z.object({
  id: z.string(),
})
export type DeleteStorySchema = z.infer<typeof deleteStorySchema>
