import { NavigationMenuItem as RadixNavigationMenuItem } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const NavigationMenuItem = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuItem>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuItem>
>(({ className, children, ...props }, ref) => (
  <RadixNavigationMenuItem
    ref={ref}
    className={classNames('first:rounded-l-16 last:rounded-r-16', className)}
    {...props}
  >
    {children}
  </RadixNavigationMenuItem>
))
NavigationMenuItem.displayName = RadixNavigationMenuItem.displayName
