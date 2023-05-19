import { useBalance } from '@/hooks/stake/useBalance'
import { useIsMounted } from '@/hooks/useIsMounted'
import Image from 'next/image'
import Typography from './typography/Typography'

interface TokenBalanceProps {
  tokenAddress?: `0x${string}`
  imageSrc?: string
  label?: string
}

const TokenBalance: React.FC<TokenBalanceProps> = ({ tokenAddress, imageSrc, label }) => {
  const isMounted = useIsMounted()
  const { token, balance } = useBalance({ tokenAddress })

  return (
    <div className="flex flex-col items-start">
      <Typography variant="lg/regular">{label}</Typography>
      <div className="mt-4 flex items-center gap-x-4">
        <Image src={imageSrc} width={50} height={50} alt="token-logo" />
        {isMounted && (
          <div className="flex flex-col">
            <Typography variant="md/regular">{Number(balance.formatted).toFixed(2)}</Typography>
            <Typography variant="md/bold">{token.symbol}</Typography>
          </div>
        )}
      </div>
    </div>
  )
}

export default TokenBalance
