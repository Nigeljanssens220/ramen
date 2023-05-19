import { ConnectWalletPhrase } from '@/components/ConnectWalletPhrase'
import { Kanban } from '@/components/Kanban'
import { PageLayout } from '@/components/PageLayout'
import { useIsMounted } from '@/hooks/useIsMounted'
import { type NextPage } from 'next'
import { useAccount } from 'wagmi'

const KanbanPage: NextPage = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()
  return <PageLayout className="gap-y-2">{isMounted && isConnected ? <Kanban /> : <ConnectWalletPhrase />}</PageLayout>
}

export default KanbanPage
