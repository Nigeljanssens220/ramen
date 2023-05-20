/* eslint-disable */
// @ts-nocheck
import { ArrowTopRightOnSquareIcon, CheckBadgeIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { Typography, useToast } from '@ramen/ui'
import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface StakeProps {
  abi: unknown[]
  tokenAddress?: string
  amount: bigint
}

export const useStake = ({ abi, amount, tokenAddress }: StakeProps) => {
  const { address: userAddress } = useAccount()
  const { toast } = useToast()

  const { config, error: prepareError } = usePrepareContractWrite({
    abi,
    address: tokenAddress,
    chainId: mainnet.id,
    functionName: 'enter',
    args: [amount],
    account: userAddress,
    enabled: Boolean(amount) && Boolean(userAddress) && Boolean(tokenAddress),
  })

  const contract = useContractWrite({
    ...config,
    onSuccess: ({ hash }) => {
      toast({
        title: 'Stake successful.',
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
    },
    onError: () => {
      toast({
        title: 'Stake failed.',
        description: (
          <div className="flex items-center justify-center gap-x-2">
            <XCircleIcon className="h-8 w-8 fill-primary" />
            <Typography as="span" variant="sm/regular" className="text-primary">
              Your attempt to stake your tokens failed.
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
