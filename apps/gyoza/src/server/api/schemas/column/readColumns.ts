import * as z from 'zod'

export const readColumnsSchema = z.object({
  userAddress: z.string().startsWith('0x'),
})
export type ReadColumnsSchema = z.infer<typeof readColumnsSchema>
