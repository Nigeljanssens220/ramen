import { useIsMounted } from '@/hooks/useIsMounted'
import { useAccount } from 'wagmi'
import { ConnectWallet, ConnectedWallet } from '../dropdown'

export const WalletButton: React.FC = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()

  if (isMounted && isConnected) {
    return <ConnectedWallet />
  }

  return <ConnectWallet />
}
