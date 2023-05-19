import { NavigationMenu as RadixNavigationMenu, type NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'
import { NavigationMenuContent } from './NavigationMenuContent'
import { NavigationMenuItem } from './NavigationMenuItem'
import { NavigationMenuLink } from './NavigationMenuLink'
import { NavigationMenuList } from './NavigationMenuList'
import { NavigationMenuTrigger } from './NavigationMenuTrigger'
import { NavigationMenuViewport } from './NavigationMenuViewport'

const NavigationMenuRoot = forwardRef<
  React.ElementRef<typeof RadixNavigationMenu>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenu>
>(({ className, children, ...props }, ref) => (
  <RadixNavigationMenu
    ref={ref}
    className={classNames('relative z-10 flex flex-1 items-center justify-center', className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </RadixNavigationMenu>
))
NavigationMenuRoot.displayName = RadixNavigationMenu.displayName

export const NavigationMenu: React.FC<NavigationMenuProps> & {
  Content: typeof NavigationMenuContent
  Item: typeof NavigationMenuItem
  Link: typeof NavigationMenuLink
  List: typeof NavigationMenuList
  Trigger: typeof NavigationMenuTrigger
} = Object.assign(NavigationMenuRoot, {
  Content: NavigationMenuContent,
  Item: NavigationMenuItem,
  Link: NavigationMenuLink,
  List: NavigationMenuList,
  Trigger: NavigationMenuTrigger,
})
