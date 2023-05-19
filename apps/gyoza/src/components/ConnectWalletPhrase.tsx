import Typography from './typography/Typography'
import { WalletButton } from './wagmi/Profile'

const ConnectWalletPhrase: React.FC = () => {
  return (
    <>
      <Typography as="h1" variant="xl/semibold" className="!text-primary">
        Connect yourself, before you wreck yourself
      </Typography>
      <WalletButton />
    </>
  )
}

export default ConnectWalletPhrase
