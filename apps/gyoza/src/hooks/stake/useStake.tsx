import { mainnet, useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'

export interface StakeProps {
  abi: unknown[]
  tokenAddress: `0x${string}`
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
    enabled: Boolean(amount),
  })

  const contract = useContractWrite(config)

  return {
    contract,
    error: prepareError || contract.error,
  }
}
