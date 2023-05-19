import { DropdownMenuPortal, DropdownMenuContent as RadixDropdownMenuContent } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof RadixDropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenuContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPortal>
    <RadixDropdownMenuContent
      ref={ref}
      sideOffset={sideOffset}
      className={classNames(
        'bg-secondary mr-4 min-w-[220px] rounded-16 p-1 will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade',
        className
      )}
      {...props}
    />
  </DropdownMenuPortal>
))
DropdownMenuContent.displayName = RadixDropdownMenuContent.displayName
