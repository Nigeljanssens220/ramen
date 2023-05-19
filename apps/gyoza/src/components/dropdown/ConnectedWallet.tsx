import { Button, DropdownMenu } from '@ramen/ui'
import { useAccount, useDisconnect } from 'wagmi'

export const ConnectedWallet: React.FC = () => {
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild
        className="rounded bg-secondary p-1 shadow-100 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
      >
        <Button className="rounded-16 px-[22px]">{address.slice(0, 4) + '...' + address.slice(38)}</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <DropdownMenu.Item onClick={() => disconnect()}>Click here to disconnect</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}
