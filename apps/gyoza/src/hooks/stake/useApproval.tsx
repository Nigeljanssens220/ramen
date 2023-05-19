/* eslint-disable */
// @ts-nocheck
import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface ApprovalProps {
  abi: unknown[]
  spenderAddress: string
  tokenAddress: string
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
    enabled: Boolean(amount) && Boolean(userAddress) && Boolean(spenderAddress) && Boolean(tokenAddress),
  })

  const contract = useContractWrite(config)

  return {
    contract,
    error: prepareError || contract.error,
  }
}
