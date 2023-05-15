import KanbanColumn from '@/components/card/KanbanColumn'
import CreateColumnModal from '@/components/modal/CreateColumnModal'
import { useIsMounted } from '@/hooks/useIsMounted'
import { api } from '@/utils/api'
import { Ring } from '@uiball/loaders'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useAccount } from 'wagmi'
const Kanban: NextPage = () => {
  const isMounted = useIsMounted()
  const { address: userAddress } = useAccount()
  const { data: kanbanColumns, isLoading } = api.column.getAll.useQuery(
    { userAddress },
    { enabled: !!userAddress && isMounted }
  )

  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-background flex min-h-screen w-full flex-col items-center justify-center gap-y-4 border text-primary">
        <CreateColumnModal />
        <div className="flex h-[75vh] w-full items-center justify-center gap-x-2 sm:h-[80vh]">
          {isLoading ? (
            <Ring size={40} lineWeight={5} speed={2} color="#f8fedc" />
          ) : (
            kanbanColumns.map(({ id, title }) => <KanbanColumn title={title} columnId={id} />)
          )}
        </div>
      </main>
    </>
  )
}

export default Kanban
