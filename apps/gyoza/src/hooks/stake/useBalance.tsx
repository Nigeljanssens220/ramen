import { mainnet, useAccount, useBalance as useBalanceWagmi } from 'wagmi'

export interface BalanceProps {
  tokenAddress?: string
}

export const useBalance = ({ tokenAddress }: BalanceProps) => {
  const { address: userAddress } = useAccount()

  return useBalanceWagmi({
    address: userAddress,
    chainId: mainnet.id,
    token: tokenAddress as `0x${string}`,
    enabled: Boolean(userAddress) && Boolean(tokenAddress),
  })
}
