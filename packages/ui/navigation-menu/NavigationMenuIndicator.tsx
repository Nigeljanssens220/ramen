import { NavigationMenuIndicator as RadixNavigationMenuIndicator } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const NavigationMenuIndicator = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuIndicator>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuIndicator>
>(({ className, ...props }, ref) => (
  <RadixNavigationMenuIndicator
    ref={ref}
    className={classNames(
      'top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn',
      className
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-primary bg-opacity-20 shadow-md" />
  </RadixNavigationMenuIndicator>
))
NavigationMenuIndicator.displayName = RadixNavigationMenuIndicator.displayName
