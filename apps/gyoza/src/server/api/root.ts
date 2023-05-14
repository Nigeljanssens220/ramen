import { createTRPCRouter } from '@/server/api/trpc'
import { columnRouter } from './routers/column'
import { storyRouter } from './routers/story'

export const appRouter = createTRPCRouter({
  column: columnRouter,
  story: storyRouter,
})

export type AppRouter = typeof appRouter
