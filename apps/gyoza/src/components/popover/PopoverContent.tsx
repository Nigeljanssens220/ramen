import { PopoverPortal, PopoverContent as RadixPopoverContent } from '@radix-ui/react-popover'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'

export const PopoverContent = forwardRef<
  React.ElementRef<typeof RadixPopoverContent>,
  React.ComponentPropsWithoutRef<typeof RadixPopoverContent>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPortal>
    <RadixPopoverContent
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={classNames(
        'bg-secondary w-[260px] rounded p-1 shadow-100 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade',
        className
      )}
      {...props}
    />
  </PopoverPortal>
))
PopoverContent.displayName = RadixPopoverContent.displayName
