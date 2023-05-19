import { TabsTrigger as RadixTabsTrigger } from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { classNames } from '../helpers'
import { Typography } from '../typography'

export const TabsTrigger = forwardRef<
  React.ElementRef<typeof RadixTabsTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixTabsTrigger>
>(({ children, className, ...props }, ref) => (
  <RadixTabsTrigger ref={ref} {...props} asChild>
    <Typography
      variant="lg/bold"
      as="button"
      className={classNames(
        'text-background hover:bg-background data-[state=active]:bg-background w-full cursor-pointer whitespace-nowrap rounded-lg bg-transparent bg-opacity-0 px-5 py-4 transition duration-300 hover:bg-opacity-10 disabled:pointer-events-none disabled:bg-transparent data-[state=active]:bg-opacity-40 data-[state=active]:!text-primary',
        className
      )}
    >
      {children}
    </Typography>
  </RadixTabsTrigger>
))
TabsTrigger.displayName = RadixTabsTrigger.displayName
