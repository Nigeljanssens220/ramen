/* eslint-disable */
// @ts-nocheck
import { ArrowTopRightOnSquareIcon, CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { Typography, useToast } from '@ramen/ui'
import { revalidatePath } from 'next/cache'
import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface StakeProps {
  abi: unknown[]
  tokenAddress: `0x${string}`
  amount: bigint
  enabled?: boolean
}

export const useUnstake = ({ abi, amount, tokenAddress, enabled }: StakeProps) => {
  const { address: userAddress } = useAccount()
  const { toast } = useToast()

  const { config, error: prepareError } = usePrepareContractWrite({
    abi,
    address: tokenAddress,
    chainId: mainnet.id,
    functionName: 'leave',
    args: [amount],
    account: userAddress,
    enabled: enabled && Boolean(amount) && Boolean(tokenAddress),
  })

  const contract = useContractWrite({
    ...config,
    onSuccess: ({ hash }) => {
      toast({
        title: 'Unstake successful.',
        description: (
          <div className="flex items-center justify-center gap-x-2">
            <CheckBadgeIcon className="h-8 w-8 fill-primary" />
            <a className="flex items-end decoration-primary hover:underline" href={`https://etherscan.io/tx/${hash}`}>
              <Typography as="span" variant="sm/regular" className="text-primary">
                Click here to view your transaction
              </Typography>
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 fill-primary" />
            </a>
          </div>
        ),
      })
      revalidatePath('/stake')
    },
    onError: ({ cause }) => {
      toast({
        title: 'Unstake failed.',
        description: (
          <div className="flex items-center justify-center gap-x-2">
            <XCircleIcon className="h-8 w-8 fill-primary" />
            <Typography as="span" variant="sm/regular" className="text-primary">
              {cause?.shortMessage}
            </Typography>
          </div>
        ),
      })
    },
  })

  return {
    contract,
    error: prepareError || contract.error,
  }
}
