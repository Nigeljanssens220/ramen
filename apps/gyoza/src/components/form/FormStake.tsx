import { sushiABI } from '@/contracts/sushi'
import { xSushiABI } from '@/contracts/xsushi'
import { useAllowance } from '@/hooks/stake/useAllowance'
import { useApproval } from '@/hooks/stake/useApproval'
import { useBalance } from '@/hooks/stake/useBalance'
import { useStake } from '@/hooks/stake/useStake'
import { useIsMounted } from '@/hooks/useIsMounted'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { Button, NumberField, Typography, classNames } from '@ramen/ui'
import { useState } from 'react'
import { parseEther } from 'viem'

interface FormStakeProps {
  tokenAddress: `0x${string}`
  spenderAddress: `0x${string}`
}

export const FormStake: React.FC<FormStakeProps> = ({ tokenAddress, spenderAddress }) => {
  const isMounted = useIsMounted()
  const [stakeAmount, setStakeAmount] = useState<string | null>()
  const { data: allowance } = useAllowance({
    spenderAddress,
    tokenAddress,
    abi: sushiABI,
  })

  const amount = Boolean(stakeAmount) ? parseEther(`${parseFloat(stakeAmount)}`) : parseEther(`${0}`)
  const { contract: approval, error } = useApproval({
    amount,
    spenderAddress,
    tokenAddress,
    abi: xSushiABI,
  })
  const { data: balance } = useBalance({ tokenAddress })
  const { contract: stake, error: stakeError } = useStake({
    abi: xSushiABI,
    amount,
    tokenAddress: spenderAddress,
  })

  const stakeAmountExceedsAllowance = Boolean(stakeAmount) && amount > (allowance as bigint)
  const stakeAmountExceedsBalance = Boolean(stakeAmount) && amount > balance.value
  const isError = Boolean(error) || Boolean(stakeError) || stakeAmountExceedsBalance || amount === BigInt(0)

  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-1">
      <div className="flex w-full flex-col items-end gap-y-1">
        <Button variant="sm/inline" className="!p-0" onClick={() => setStakeAmount(balance.formatted)}>
          Max. {isMounted && Number(balance.formatted).toFixed(2)}
        </Button>
        <NumberField
          className="w-full"
          inlineName={isMounted && balance.symbol}
          error={stakeAmountExceedsAllowance}
          value={stakeAmount}
          placeholder={'0'}
          startIcon={
            <div className="mr-2 w-4">
              <ExclamationTriangleIcon
                className={classNames(stakeAmountExceedsAllowance ? '' : 'hidden', 'h-4 w-4 text-red-500')}
              />
            </div>
          }
          onChange={(e) => setStakeAmount(e.currentTarget.value)}
        />
        {stakeAmountExceedsAllowance && (
          <Typography variant="md/regular" className="text-justify text-red-500">
            Staking requires increasing your allowance.
          </Typography>
        )}
        {stakeAmountExceedsBalance && (
          <Typography variant="md/regular" className="text-justify text-red-500">
            Staking requires increasing your balance.
          </Typography>
        )}
      </div>
      {stakeAmountExceedsAllowance ? (
        <Button onClick={() => approval.write?.()}>Increase allowance</Button>
      ) : (
        <Button disabled={isError} onClick={() => stake.write?.()}>
          Stake
        </Button>
      )}
    </div>
  )
}
