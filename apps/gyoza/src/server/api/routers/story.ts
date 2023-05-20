import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { createStorySchema } from '../schemas/story/createStory'
import { deleteStorySchema } from '../schemas/story/deleteStory'
import { updateStorySchema } from '../schemas/story/updateStory'

export const storyRouter = createTRPCRouter({
  create: publicProcedure.input(createStorySchema).mutation(async ({ input, ctx }) => {
    const { title, content, userAddress, columnId } = input

    return await ctx.prisma.story.create({
      data: {
        title,
        content,
        userAddress,
        columnId,
      },
    })
  }),
  update: publicProcedure.input(updateStorySchema).mutation(async ({ input, ctx }) => {
    const { id, title, content, columnId } = input

    return await ctx.prisma.story.update({
      where: { id },
      data: {
        title,
        content,
        columnId,
      },
    })
  }),
  delete: publicProcedure.input(deleteStorySchema).mutation(async ({ input, ctx }) => {
    const { id } = input

    return await ctx.prisma.story.delete({
      where: { id },
    })
  }),
})
