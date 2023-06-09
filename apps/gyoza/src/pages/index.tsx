import { PageLayout } from '@/components/PageLayout'
import { Heading, Typography } from '@ramen/ui'
import { buttonStyles } from '@ramen/ui/button/styles'
import { type NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <PageLayout>
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
    </PageLayout>
  )
}

export default Home
