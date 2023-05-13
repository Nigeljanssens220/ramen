import { NavigationMenuList as RadixNavigationMenuList } from '@radix-ui/react-navigation-menu'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'
import { NavigationMenuIndicator } from './NavigationMenuIndicator'

export const NavigationMenuList = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuList>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuList>
>(({ className, children, ...props }, ref) => (
  <RadixNavigationMenuList
    ref={ref}
    className={classNames('group flex flex-1 list-none items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuIndicator />
  </RadixNavigationMenuList>
))
NavigationMenuList.displayName = RadixNavigationMenuList.displayName
