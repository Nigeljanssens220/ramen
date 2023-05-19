/* eslint-disable */
// @ts-nocheck
import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface StakeProps {
  abi: unknown[]
  tokenAddress?: string
  amount: bigint
}

export const useStake = ({ abi, amount, tokenAddress }: StakeProps) => {
  const { address: userAddress } = useAccount()

  const { config, error: prepareError } = usePrepareContractWrite({
    abi,
    address: tokenAddress,
    chainId: mainnet.id,
    functionName: 'enter',
    args: [amount],
    account: userAddress,
    enabled: Boolean(amount) && Boolean(userAddress) && Boolean(tokenAddress),
  })

  const contract = useContractWrite(config)

  return {
    contract,
    error: prepareError || contract.error,
  }
}
