import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { prisma } from '@/server/db'
import { createColumnSchema } from '../schemas/column/createColumn'
import { deleteColumnSchema } from '../schemas/column/deleteColumn'
import { updateColumnSchema } from '../schemas/column/updateColumn'

export const columnRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await prisma.column.findMany({
      include: {
        stories: true,
      },
    })
  }),
  create: publicProcedure.input(createColumnSchema).mutation(async ({ input }) => {
    const { title, userAddress } = input

    return await prisma.column.create({
      data: {
        title,
        userAddress,
      },
    })
  }),
  update: publicProcedure.input(updateColumnSchema).mutation(async ({ input }) => {
    const { id, title } = input

    return await prisma.column.update({
      where: { id },
      data: {
        title,
      },
    })
  }),
  delete: publicProcedure.input(deleteColumnSchema).mutation(async ({ input }) => {
    const { id } = input

    return await prisma.column.delete({
      where: { id },
    })
  }),
})
