import * as z from 'zod'

export const deleteColumnSchema = z.object({
  id: z.string().cuid(),
})
export type DeleteColumnSchema = z.infer<typeof deleteColumnSchema>
