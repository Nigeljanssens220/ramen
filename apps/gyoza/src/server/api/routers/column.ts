import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { prisma } from '@/server/db'
import { createColumnSchema } from '../schemas/column/createColumn'
import { deleteColumnSchema } from '../schemas/column/deleteColumn'
import { readColumnsSchema } from '../schemas/column/readColumns'
import { updateColumnSchema } from '../schemas/column/updateColumn'

export const columnRouter = createTRPCRouter({
  getAll: publicProcedure.input(readColumnsSchema).query(async ({ input }) => {
    const { userAddress } = input

    return await prisma.column.findMany({
      where: {
        userAddress,
      },
      include: {
        stories: true,
      },
    })
  }),
  create: publicProcedure.input(createColumnSchema).query(async ({ input }) => {
    const { title, userAddress } = input

    return await prisma.column.create({
      data: {
        title,
        userAddress,
      },
    })
  }),
  update: publicProcedure.input(updateColumnSchema).query(async ({ input }) => {
    const { id, title, userAddress } = input

    return await prisma.story.update({
      where: { id },
      data: {
        title,
        userAddress,
      },
    })
  }),
  delete: publicProcedure.input(deleteColumnSchema).query(async ({ input }) => {
    const { id } = input

    return await prisma.story.delete({
      where: { id },
    })
  }),
})
