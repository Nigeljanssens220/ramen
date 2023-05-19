import { NavigationMenuContent as RadixNavigationMenuContent } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const NavigationMenuContent = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuContent>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuContent>
>(({ className, ...props }, ref) => (
  <RadixNavigationMenuContent
    ref={ref}
    className={classNames(
      'absolute left-0 top-0 w-full p-1 data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto',
      className
    )}
    {...props}
  />
))
NavigationMenuContent.displayName = RadixNavigationMenuContent.displayName
