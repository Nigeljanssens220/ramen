import { useIsMounted } from '@/hooks/useIsMounted'
import { useAccount } from 'wagmi'
import ConnectWallet from '../dropdown/ConnectWallet'
import ConnectedWallet from '../dropdown/ConnectedWallet'

export const WalletButton = () => {
  const isMounted = useIsMounted()
  const { isConnected } = useAccount()

  if (isMounted && isConnected) {
    return <ConnectedWallet />
  }

  return <ConnectWallet />
}
