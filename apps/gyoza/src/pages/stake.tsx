import { ConnectWalletPhrase } from '@/components/ConnectWalletPhrase'
import { PageLayout } from '@/components/PageLayout'
import { StakeUnstake } from '@/components/StakeUnstake'
import { useIsMounted } from '@/hooks/useIsMounted'
import { type NextPage } from 'next'
import { useAccount } from 'wagmi'

const Stake: NextPage = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()
  return <PageLayout>{isMounted && isConnected ? <StakeUnstake /> : <ConnectWalletPhrase />}</PageLayout>
}

export default Stake
