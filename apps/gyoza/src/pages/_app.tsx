import { wagmiConfig } from '@/server/wagmi/config'
import { api } from '@/utils/api'
import { type AppType } from 'next/app'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WagmiConfig } from 'wagmi'

import Navbar from '@/components/navbar/Navbar'
import '@/styles/globals.css'

const App: AppType = ({ Component, pageProps }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <Component {...pageProps} />
      </WagmiConfig>
    </DndProvider>
  )
}

export default api.withTRPC(App)
