import { ConnectWalletPhrase } from '@/components/ConnectWalletPhrase'
import { Kanban } from '@/components/Kanban'
import { useIsMounted } from '@/hooks/useIsMounted'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useAccount } from 'wagmi'

const KanbanPage: NextPage = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()
  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full max-w-screen-2xl flex-col items-center justify-center gap-y-4 border border-background pt-10 text-primary">
        {isMounted && isConnected ? <Kanban /> : <ConnectWalletPhrase />}
      </main>
    </>
  )
}

export default KanbanPage
