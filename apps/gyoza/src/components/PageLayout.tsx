import { classNames } from '@ramen/ui'
import Head from 'next/head'

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <>
      <Head>
        <title>Ramen | Bar</title>
        <meta name="description" content="Ramen bar for all your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={classNames(
          className,
          'flex min-h-screen w-full flex-col items-center justify-start border border-background pt-64 text-primary'
        )}
      >
        {children}
      </main>
    </>
  )
}
