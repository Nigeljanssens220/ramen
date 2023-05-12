import { useEffect, useState } from 'react'
import Button from 'ui/button/Button'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'

export const useIsMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted
}

export const WalletButton = () => {
  const isMounted = useIsMounted()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { address, connector, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { data: ensAvatar } = useEnsAvatar({ name: ensName })
  const { disconnect } = useDisconnect()

  // if (isConnected && isMounted) {
  //   return <div className="text-black">{address.slice(0, 4) + '...' + address.slice(38)}</div>
  // }

  return (
    <div>
      {connectors.map((connector) => {
        return (
          <Button
            className=""
            disabled={isMounted ? !connector.ready : false}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {isMounted ? !connector.ready && ' (unsupported)' : ''}
            {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
          </Button>
        )
      })}

      {error && <div>{error.message}</div>}
    </div>
  )
}
