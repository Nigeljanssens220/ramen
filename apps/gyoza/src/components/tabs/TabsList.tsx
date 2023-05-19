'use client'

import { TabsList as RadixTabsList } from '@radix-ui/react-tabs'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'

export const TabsList = forwardRef<
  React.ElementRef<typeof RadixTabsList>,
  React.ComponentPropsWithoutRef<typeof RadixTabsList>
>(({ className, ...props }, ref) => (
  <RadixTabsList
    ref={ref}
    className={classNames('flex w-full items-center justify-evenly rounded-8 bg-background/50 p-1', className)}
    {...props}
  />
))
TabsList.displayName = RadixTabsList.displayName
