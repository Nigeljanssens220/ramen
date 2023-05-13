import { PopoverTrigger as RadixPopoverTrigger } from '@radix-ui/react-popover'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'
import Button from '../button/Button'

export const PopoverTrigger = forwardRef<
  React.ElementRef<typeof RadixPopoverTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixPopoverTrigger>
>(({ className, children, ...props }, ref) => (
  <RadixPopoverTrigger
    ref={ref}
    className={classNames(
      'bg-secondary rounded p-1 shadow-100 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade',
      className
    )}
    asChild
    {...props}
  >
    <Button>{children}</Button>
  </RadixPopoverTrigger>
))
PopoverTrigger.displayName = RadixPopoverTrigger.displayName
