'use client'

import { TabsContent as RadixTabsContent } from '@radix-ui/react-tabs'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'

export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof RadixTabsContent> {
  /*
   * Whether the content should be contained or not.
   */
  contained?: boolean
}

export const TabsContent = forwardRef<React.ElementRef<typeof RadixTabsContent>, TabsContentProps>(
  ({ contained = false, className, ...props }, ref) => (
    <RadixTabsContent ref={ref} className={classNames(contained && 'px-6', 'mt-10', className)} {...props} />
  )
)
TabsContent.displayName = RadixTabsContent.displayName
