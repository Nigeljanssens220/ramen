import { useIsMounted } from '@/hooks/useIsMounted'
import { useConnect } from 'wagmi'
import Button from '../button/Button'
import { DropdownMenu } from './Dropdown'

const ConnectWallet: React.FC = () => {
  const isMounted = useIsMounted()
  const { connect, connectors, isLoading, pendingConnector } = useConnect()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild
        className="rounded p-1 shadow-100 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
      >
        <Button>Connect wallet</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          {connectors.map((connector) => {
            return (
              <DropdownMenu.Item
                disabled={isMounted ? !connector.ready : false}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
                {isMounted ? !connector.ready && ' (unsupported)' : ''}
                {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default ConnectWallet
