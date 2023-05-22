import { xSushiABI } from '@/contracts/xsushi'
import { useBalance } from '@/hooks/stake/useBalance'
import { useUnstake } from '@/hooks/stake/useUnstake'
import { parseEther } from '@/lib/parseEther'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { Button, NumberField, Spinner, Typography, classNames } from '@ramen/ui'
import { useState } from 'react'

interface FormUnstakeProps {
  unstakeTokenAddress?: string
}

export const FormUnstake: React.FC<FormUnstakeProps> = ({ unstakeTokenAddress }) => {
  const [unstakeAmount, setUnstakeAmount] = useState<string>('')
  const { data: balance } = useBalance({ tokenAddress: unstakeTokenAddress })

  const amount = parseEther(unstakeAmount)
  const isAllowedToUnstake = amount <= balance.value

  const {
    contract: { write, isLoading: unstakeIsTransacting },
    error: unstakeError,
  } = useUnstake({
    abi: xSushiABI,
    amount,
    tokenAddress: unstakeTokenAddress as `0x${string}`,
    enabled: isAllowedToUnstake,
  })

  const unstakeAmountExceedsBalance = Boolean(unstakeAmount) && amount > balance.value
  const isDisabled = unstakeAmountExceedsBalance || amount === BigInt(0)

  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-1">
      <div className="flex w-full flex-col items-end gap-y-1">
        <Button
          variant="sm/inline"
          className="!p-0"
          disabled={balance && parseFloat(balance.formatted) < 0.05}
          onClick={() => balance && setUnstakeAmount(balance.formatted)}
        >
          Max. {balance && Number(balance.formatted).toFixed(2)}
        </Button>
        <NumberField
          className="w-full"
          inlineName={balance && balance.symbol}
          error={unstakeAmountExceedsBalance}
          value={unstakeAmount}
          placeholder={'0'}
          defaultValue="0"
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
      <Button className="rounded-8" disabled={isDisabled || unstakeIsTransacting} onClick={() => write?.()}>
        {unstakeIsTransacting ? <Spinner /> : 'Unstake'}
      </Button>
    </div>
  )
}
