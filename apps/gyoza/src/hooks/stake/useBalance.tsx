import { mainnet, useAccount, useBalance as useBalanceWagmi, useToken } from 'wagmi'

export interface BalanceProps {
  tokenAddress: `0x${string}`
}

export const useBalance = ({ tokenAddress }: BalanceProps) => {
  const { address: userAddress } = useAccount()
  const { data: balance, error: balanceError } = useBalanceWagmi({
    address: userAddress,
    chainId: mainnet.id,
    token: tokenAddress,
  })
  const { data: token, error: tokenError } = useToken({
    address: tokenAddress,
  })

  return {
    token,
    balance,
    error: balanceError || tokenError,
  }
}
