import { useBalance } from '@/hooks/stake/useBalance'
import { Typography } from '@ramen/ui'
import Image from 'next/image'

interface TokenBalanceProps {
  tokenAddress?: `0x${string}`
  imageSrc?: string
  label?: string
  symbol?: string
}

export const TokenBalance: React.FC<TokenBalanceProps> = ({ tokenAddress, imageSrc, label, symbol }) => {
  const { data: balance, error } = useBalance({ tokenAddress })

  return (
    <div className="flex flex-col items-start">
      <Typography variant="lg/regular">{label}</Typography>
      <div className="mt-4 flex items-center gap-x-4">
        <Image src={imageSrc} width={50} height={50} alt="token-logo" />
        <div className="flex flex-col">
          <Typography variant="md/regular">{Number(balance.formatted).toFixed(2)}</Typography>
          <Typography variant="md/bold">{symbol}</Typography>
        </div>
      </div>
    </div>
  )
}
