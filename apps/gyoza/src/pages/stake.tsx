import { type NextPage } from 'next'
import Head from 'next/head'

const Stake: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-background flex min-h-screen  w-full flex-col items-center justify-center border text-primary">
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-6xl font-bold">Welcome to Ramen Bar</h1>
        </div>
      </main>
    </>
  )
}

export default Stake
