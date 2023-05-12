import { wagmiConfig } from '@/server/wallet/config'
import { api } from '@/utils/api'
import { type AppType } from 'next/app'
import { WagmiConfig } from 'wagmi'

import '@/styles/globals.css'

const App: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default api.withTRPC(App)
