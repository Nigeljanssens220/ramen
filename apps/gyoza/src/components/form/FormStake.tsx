import { sushiABI } from '@/contracts/sushi'
import { xSushiABI } from '@/contracts/xsushi'
import { useAllowance } from '@/hooks/stake/useAllowance'
import { useApproval } from '@/hooks/stake/useApproval'
import { useBalance } from '@/hooks/stake/useBalance'
import { useStake } from '@/hooks/stake/useStake'
import useDebounce from '@/hooks/useDebounce'
import { parseEther } from '@/lib/parseEther'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'
import { Button, NumberField, Spinner, Typography, classNames } from '@ramen/ui'
import { useState } from 'react'

interface FormStakeProps {
  tokenAddress?: string
  spenderAddress?: string
}

export const FormStake: React.FC<FormStakeProps> = ({ tokenAddress, spenderAddress }) => {
  const [stakeAmount, setStakeAmount] = useState<string>('')
  const debouncedStakeAmount = useDebounce(stakeAmount, 500) // Arbitrary 500ms delay before any RPC calls are made
  const { data: balance } = useBalance({ tokenAddress })
  const { data: allowance } = useAllowance({
    spenderAddress: spenderAddress as `0x${string}`,
    tokenAddress: tokenAddress as `0x${string}`,
    abi: sushiABI,
  })

  const amount = parseEther(debouncedStakeAmount)
  const isAllowedToStake = Boolean(allowance) && amount <= (allowance as bigint) && amount <= balance.value

  const { contract: approval, error } = useApproval({
    amount,
    spenderAddress,
    tokenAddress,
    abi: xSushiABI,
  })
  const {
    contract: { write, isLoading: stakeIsTransacting },
    error: stakeError,
  } = useStake({
    abi: xSushiABI,
    amount,
    tokenAddress: spenderAddress,
    enabled: isAllowedToStake,
  })

  const stakeAmountExceedsAllowance = Boolean(stakeAmount) && amount > (allowance as bigint)
  const stakeAmountExceedsBalance = Boolean(stakeAmount) && amount > balance.value
  const isDisabled = Boolean(error) || Boolean(stakeError) || stakeAmountExceedsBalance

  return (
    <div className="flex h-full w-full flex-col justify-between gap-y-1">
      <div className="flex w-full flex-col items-end gap-y-1 text-start">
        <Button variant="sm/inline" className="!p-0" onClick={() => balance && setStakeAmount(balance.formatted)}>
          Max. {balance && Number(balance.formatted).toFixed(2)}
        </Button>
        <NumberField
          className="w-full"
          inlineName={balance && balance.symbol}
          error={stakeAmountExceedsAllowance || stakeAmountExceedsBalance}
          value={stakeAmount}
          placeholder={'0'}
          startIcon={
            <div className="mr-2 w-4">
              <ExclamationTriangleIcon
                className={classNames(
                  stakeAmountExceedsAllowance || stakeAmountExceedsBalance ? '' : 'hidden',
                  'h-4 w-4 text-red-500'
                )}
              />
            </div>
          }
          onChange={(e) => setStakeAmount(e.currentTarget.value)}
        />
      </div>
      {stakeAmountExceedsAllowance && (
        <Typography variant="md/regular" className="text-red-500">
          Staking requires increasing your allowance.
        </Typography>
      )}
      {stakeAmountExceedsBalance && (
        <Typography variant="md/regular" className="text-red-500">
          Staking requires increasing your balance.
        </Typography>
      )}
      {stakeAmountExceedsAllowance ? (
        <Button className="rounded-8" onClick={() => approval.write?.()}>
          Increase allowance
        </Button>
      ) : (
        <Button
          className="rounded-8"
          disabled={amount === BigInt(0) || isDisabled || stakeIsTransacting}
          onClick={() => {
            write?.()
            setStakeAmount('')
          }}
        >
          {stakeIsTransacting ? <Spinner /> : 'Stake'}
        </Button>
      )}
    </div>
  )
}
