import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { createColumnSchema } from '../schemas/column/createColumn'
import { deleteColumnSchema } from '../schemas/column/deleteColumn'
import { updateColumnSchema } from '../schemas/column/updateColumn'

export const columnRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.column.findMany({
      include: {
        stories: true,
      },
    })
  }),
  create: publicProcedure.input(createColumnSchema).mutation(async ({ input, ctx }) => {
    const { title, userAddress } = input
    return await ctx.prisma.column.create({
      data: {
        title,
        userAddress,
      },
    })
  }),
  update: publicProcedure.input(updateColumnSchema).mutation(async ({ input, ctx }) => {
    const { id, title } = input

    return await ctx.prisma.column.update({
      where: { id },
      data: {
        title,
      },
    })
  }),
  delete: publicProcedure.input(deleteColumnSchema).mutation(async ({ input, ctx }) => {
    const { id } = input

    return await ctx.prisma.column.delete({
      where: { id },
    })
  }),
})
