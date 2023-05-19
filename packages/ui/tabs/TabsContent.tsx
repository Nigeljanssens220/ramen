import { TabsContent as RadixTabsContent } from '@radix-ui/react-tabs'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

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
