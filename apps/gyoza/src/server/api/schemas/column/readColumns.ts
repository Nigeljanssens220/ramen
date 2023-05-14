import * as z from 'zod'

export const readColumnsSchema = z.object({
  userAddress: z.string(),
})
export type ReadColumnsSchema = z.infer<typeof readColumnsSchema>
