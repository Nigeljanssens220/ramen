import Card from '@/components/card/Card'
import KanbanColumn from '@/components/card/KanbanColumn'
import KanbanStory from '@/components/card/KanbanStory'
import CreateColumnModal from '@/components/modal/CreateColumnModal'
import { useIsMounted } from '@/hooks/useIsMounted'
import { api } from '@/utils/api'
import { classNames } from '@ramen/ui'
import { Ring } from '@uiball/loaders'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useAccount } from 'wagmi'

const Kanban: NextPage = () => {
  const isMounted = useIsMounted()
  const { address: userAddress } = useAccount()
  const { data: kanbanColumns, isLoading } = api.column.getAll.useQuery(undefined, {
    enabled: !!userAddress && isMounted,
  })

  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-center gap-y-4 border border-background pt-10 text-primary">
        <Card className="!bg-secondary !p-1">
          <CreateColumnModal />
        </Card>

        <div
          className={classNames(
            isMounted && !!userAddress ? 'flex' : 'hidden',
            'h-[75vh] w-full max-w-screen-lg items-center justify-center gap-x-2 overflow-x-auto sm:h-[80vh]'
          )}
        >
          {isLoading ? (
            <Ring size={40} lineWeight={5} speed={2} color="#f8fedc" />
          ) : (
            kanbanColumns.map((column) => {
              const { id, title, stories } = column

              return (
                <KanbanColumn column={column} title={title} key={id}>
                  {stories.map((story) => (
                    <KanbanStory story={story} key={story.id} />
                  ))}
                </KanbanColumn>
              )
            })
          )}
        </div>
      </main>
    </>
  )
}

export default Kanban
