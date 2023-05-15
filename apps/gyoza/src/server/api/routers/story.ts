import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { prisma } from '@/server/db'
import { createStorySchema } from '../schemas/story/createStory'
import { deleteStorySchema } from '../schemas/story/deleteStory'
import { updateStorySchema } from '../schemas/story/updateStory'

export const storyRouter = createTRPCRouter({
  create: publicProcedure.input(createStorySchema).mutation(async ({ input }) => {
    const { title, content, userAddress, columnId } = input

    return await prisma.story.create({
      data: {
        title,
        content,
        userAddress,
        columnId,
      },
    })
  }),
  update: publicProcedure.input(updateStorySchema).mutation(async ({ input }) => {
    const { id, title, content, userAddress, columnId } = input

    return await prisma.story.update({
      where: { id },
      data: {
        title,
        content,
        userAddress,
        columnId,
      },
    })
  }),
  delete: publicProcedure.input(deleteStorySchema).mutation(async ({ input }) => {
    const { id } = input

    return await prisma.story.delete({
      where: { id },
    })
  }),
})
