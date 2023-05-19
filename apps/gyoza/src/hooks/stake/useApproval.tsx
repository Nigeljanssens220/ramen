/* eslint-disable */
// @ts-nocheck
import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface ApprovalProps {
  abi: unknown[]
  spenderAddress: `0x${string}`
  tokenAddress: `0x${string}`
  amount: bigint
}

export const useApproval = ({ abi, amount, spenderAddress, tokenAddress }: ApprovalProps) => {
  const { address: userAddress } = useAccount()

  const { config, error: prepareError } = usePrepareContractWrite({
    abi,
    address: tokenAddress,
    chainId: mainnet.id,
    functionName: 'approve',
    args: [spenderAddress, amount],
    account: userAddress,
    enabled: Boolean(amount),
  })

  const contract = useContractWrite(config)

  return {
    contract,
    error: prepareError || contract.error,
  }
}
