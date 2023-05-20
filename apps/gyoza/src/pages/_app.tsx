import { Navbar } from '@/components/navbar'
import { wagmiConfig } from '@/server/wagmi/config'
import '@/styles/globals.css'
import { api } from '@/utils/api'
import { Toaster } from '@ramen/ui'
import { type AppType } from 'next/app'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WagmiConfig } from 'wagmi'

const App: AppType = ({ Component, pageProps }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </WagmiConfig>
    </DndProvider>
  )
}

export default api.withTRPC(App)
