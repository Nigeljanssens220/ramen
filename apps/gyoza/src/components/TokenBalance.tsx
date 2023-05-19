import { useBalance } from '@/hooks/stake/useBalance'
import { useIsMounted } from '@/hooks/useIsMounted'
import { Spinner, Typography } from '@ramen/ui'
import Image from 'next/image'

interface TokenBalanceProps {
  tokenAddress?: `0x${string}`
  imageSrc?: string
  label?: string
  symbol?: string
}

export const TokenBalance: React.FC<TokenBalanceProps> = ({ tokenAddress, imageSrc, label, symbol }) => {
  const isMounted = useIsMounted()
  const { data: balance, error } = useBalance({ tokenAddress })

  console.log(balance)
  console.log(error)

  return (
    <div className="flex flex-col items-start">
      <Typography variant="lg/regular">{label}</Typography>
      <div className="mt-4 flex items-center gap-x-4">
        <Image src={imageSrc} width={50} height={50} alt="token-logo" />
        <div className="flex flex-col">
          <Typography variant="md/regular">{isMounted ? Number(balance.formatted).toFixed(2) : <Spinner />}</Typography>
          <Typography variant="md/bold">{symbol}</Typography>
        </div>
      </div>
    </div>
  )
}
