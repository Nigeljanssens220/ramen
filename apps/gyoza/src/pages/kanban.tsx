import KanbanColumn from '@/components/card/KanbanColumn'
import KanbanStory from '@/components/card/KanbanStory'
import { type NextPage } from 'next'
import Head from 'next/head'

const Kanban: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-background flex min-h-screen w-full flex-col items-center justify-center border text-primary">
        <div className="flex h-[75vh] w-full items-center justify-center gap-x-2 sm:h-[80vh]">
          <KanbanColumn title="First column!">
            <KanbanStory>HI</KanbanStory>
            <KanbanStory>HI</KanbanStory>
            <KanbanStory>HI</KanbanStory>
            <KanbanStory>HI</KanbanStory>
            <KanbanStory>HI</KanbanStory>
            <KanbanStory>HI</KanbanStory>
          </KanbanColumn>
          <KanbanColumn title="Second column!" />
          <KanbanColumn title="Third column!" />
        </div>
      </main>
    </>
  )
}

export default Kanban
