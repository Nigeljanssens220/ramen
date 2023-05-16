'use client'

import Card from '@/components/card/Card'
import Typography from '@/components/typography/Typography'
import { useIsMounted } from '@/hooks/useIsMounted'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useBalance } from 'wagmi'

const Stake: NextPage = () => {
  const isMounted = useIsMounted()
  const { address } = useAccount()
  const { data: sepoliaBalance } = useBalance({
    address: address,
    chainId: 11155111,
  })

  // const prepare = usePrepareContractWrite({
  //   address: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  //   abi: xSushiABI,
  //   functionName: 'enter',
  //   args: [1],
  //   chainId: mainnet.id,
  //   account: address,
  //   onError: (error) => {
  //     console.log('Error', error)
  //   },
  // })
  // const { result, request } = viemClient
  //   .simulateContract({
  //     address: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  //     abi: xSushiABI,
  //     functionName: 'enter',
  //     account: address,
  //     args: [10000000000000000000n],
  //   })
  //   .then((res) => res.json())

  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full  flex-col items-center justify-center border border-background text-primary">
        <div className="flex h-full w-full items-center justify-center">
          <Card className="flex">
            {isMounted && (
              <div>
                <Typography variant="md/regular">
                  Sepolia balance: {sepoliaBalance ? sepoliaBalance.formatted : ''} sETH
                </Typography>
                {/* <Typography variant="md/regular">{JSON.stringify(prepare)}</Typography> */}
              </div>
            )}
          </Card>
        </div>
      </main>
    </>
  )
}

export default Stake
