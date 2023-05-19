import { buttonStyles } from '@/components/button/styles'
import Heading from '@/components/heading/Heading'
import Typography from '@/components/typography/Typography'
import { type NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen w-full  flex-col items-center justify-start border border-background pt-64 text-primary">
        <div className="flex w-full max-w-screen-sm flex-col items-center gap-y-24">
          <div className="flex flex-col gap-y-1 text-center">
            <Heading variant="heavy" className="text-primary">
              Welcome to our Ramen bar!
            </Heading>
            <Typography variant="xl/regular" className="text-primary">
              Eat, sleep and live your dreams.
            </Typography>
          </div>
          <div className="flex gap-x-2">
            <Link href="/stake" className={buttonStyles({ variant: 'primary' })}>
              Stake now!
            </Link>
            <Link href="/kanban" className={buttonStyles({ variant: 'secondary' })}>
              Kanban now!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
