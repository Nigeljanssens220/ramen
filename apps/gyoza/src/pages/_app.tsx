import { wagmiConfig } from '@/server/wagmi/config'
import { api } from '@/utils/api'
import { type AppType } from 'next/app'
import { WagmiConfig } from 'wagmi'

import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'

const App: AppType = ({ Component, pageProps }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <Navbar />
      <Component {...pageProps} />
    </WagmiConfig>
  )
}

export default api.withTRPC(App)
