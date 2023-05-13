import { NavigationMenuViewport as RadixNavigationMenuViewport } from '@radix-ui/react-navigation-menu'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'

export const NavigationMenuViewport = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuViewport>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuViewport>
>(({ className, ...props }, ref) => (
  <div className={classNames('absolute left-0 top-full flex w-full justify-center')}>
    <RadixNavigationMenuViewport
      className={classNames(
        'relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-16 bg-primary bg-opacity-20 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]',
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
))
NavigationMenuViewport.displayName = RadixNavigationMenuViewport.displayName
