import { xSushiABI } from '@/contracts/xsushi'
import { useBalance } from '@/hooks/stake/useBalance'
import { useUnstake } from '@/hooks/stake/useUnstake'
import { useIsMounted } from '@/hooks/useIsMounted'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { Button, NumberField, Typography, classNames } from '@ramen/ui'
import { useState } from 'react'
import { parseEther } from 'viem'

interface FormUnstakeProps {
  unstakeTokenAddress: `0x${string}`
}

export const FormUnstake: React.FC<FormUnstakeProps> = ({ unstakeTokenAddress }) => {
  const isMounted = useIsMounted()
  const [unstakeAmount, setUnstakeAmount] = useState<string | null>()

  const amount = Boolean(unstakeAmount) ? parseEther(`${parseFloat(unstakeAmount)}`) : parseEther(`${0}`)

  const { data: balance } = useBalance({ tokenAddress: unstakeTokenAddress })
  const { contract: unstake, error: unstakeError } = useUnstake({
    abi: xSushiABI,
    amount,
    tokenAddress: unstakeTokenAddress,
  })

  const unstakeAmountExceedsBalance = Boolean(unstakeAmount) && amount > balance.value
  const isError = unstakeAmountExceedsBalance || amount === BigInt(0)

  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-1">
      <div className="flex w-full flex-col items-end gap-y-1">
        <Button
          variant="sm/inline"
          className=" !p-0"
          disabled={amount === BigInt(0)}
          onClick={() => setUnstakeAmount(balance.formatted)}
        >
          Max. {isMounted && Number(balance.formatted).toFixed(2)}
        </Button>
        <NumberField
          className="w-full"
          inlineName={balance.symbol}
          error={unstakeAmountExceedsBalance}
          value={unstakeAmount}
          placeholder={'0'}
          startIcon={
            <div className="mr-2 w-4">
              <ExclamationTriangleIcon
                className={classNames(unstakeAmountExceedsBalance ? '' : 'hidden', 'h-4 w-4 text-red-500')}
              />
            </div>
          }
          onChange={(e) => setUnstakeAmount(e.currentTarget.value)}
        />
      </div>
      {unstakeAmountExceedsBalance && (
        <Typography variant="md/regular" className="text-justify text-red-500">
          The amount you are trying to unstake exceeds your balance.
        </Typography>
      )}
      <Button className="rounded-8" disabled={isError} onClick={() => unstake.write?.()}>
        Unstake
      </Button>
    </div>
  )
}
