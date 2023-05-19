import { TabsList as RadixTabsList } from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const TabsList = forwardRef<
  React.ElementRef<typeof RadixTabsList>,
  React.ComponentPropsWithoutRef<typeof RadixTabsList>
>(({ className, ...props }, ref) => (
  <RadixTabsList
    ref={ref}
    className={classNames('bg-background/50 flex w-full items-center justify-evenly rounded-8 p-1', className)}
    {...props}
  />
))
TabsList.displayName = RadixTabsList.displayName
