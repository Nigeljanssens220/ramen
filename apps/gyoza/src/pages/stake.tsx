'use client'

import Card from '@/components/card/Card'
import Typography from '@/components/typography/Typography'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useBalance } from 'wagmi'

const Stake: NextPage = () => {
  const { data } = useBalance({
    address: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
    chainId: 5,
  })

  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="border-background flex min-h-screen  w-full flex-col items-center justify-center border text-primary">
        <div className="flex h-full w-full items-center justify-center">
          <Card className="flex">
            <Typography variant="md/regular">Balance:&nbsp;</Typography>
            <Typography variant="md/regular">{data ? data.formatted : ''}</Typography>
          </Card>
        </div>
      </main>
    </>
  )
}

export default Stake
