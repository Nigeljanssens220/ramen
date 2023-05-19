import { Typography } from '@ramen/ui'
import { WalletButton } from './button/WalletButton'

export const ConnectWalletPhrase: React.FC = () => {
  return (
    <>
      <Typography as="h1" variant="xl/semibold" className="!text-primary">
        Connect yourself, before you wreck yourself
      </Typography>
      <WalletButton />
    </>
  )
}
