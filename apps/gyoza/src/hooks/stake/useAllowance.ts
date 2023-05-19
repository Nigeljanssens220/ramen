import { mainnet, useAccount, useContractRead } from 'wagmi'

export interface AllowanceProps {
  spenderAddress: `0x${string}`
  tokenAddress: `0x${string}`
  abi: unknown[]
}

export const useAllowance = ({ abi, spenderAddress, tokenAddress }: AllowanceProps) => {
  const { address: userAddress } = useAccount()

  return useContractRead({
    abi,
    address: tokenAddress,
    args: [userAddress, spenderAddress],
    chainId: mainnet.id,
    functionName: 'allowance',
  })
}
