import { DropdownMenuItem as RadixDropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof RadixDropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof RadixDropdownMenuItem> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <RadixDropdownMenuItem
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-16 py-1.5 pl-4 outline-none transition-colors hover:bg-background/20 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
))
DropdownMenuItem.displayName = RadixDropdownMenuItem.displayName
