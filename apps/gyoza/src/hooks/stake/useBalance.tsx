import { mainnet, useAccount, useBalance as useBalanceWagmi } from 'wagmi'

export interface BalanceProps {
  tokenAddress: `0x${string}`
}

export const useBalance = ({ tokenAddress }: BalanceProps) => {
  const { address: userAddress } = useAccount()

  return useBalanceWagmi({
    address: userAddress,
    chainId: mainnet.id,
    token: tokenAddress,
  })
}
