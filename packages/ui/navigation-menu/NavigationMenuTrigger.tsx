import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { NavigationMenuTrigger as RadixNavigationMenuTrigger } from '@radix-ui/react-navigation-menu'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const NavigationMenuTrigger = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuTrigger>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuTrigger>
>(({ className, children, ...props }, ref) => (
  <RadixNavigationMenuTrigger
    ref={ref}
    className={classNames(
      'group inline-flex w-max items-center justify-center gap-2 rounded-16 bg-transparent px-4 py-2 text-md text-primary outline-none transition-colors duration-150 hover:bg-primary hover:bg-opacity-20 focus-visible:ring-2 focus-visible:ring-accent-orange-600 data-[state=open]:text-accent-orange-500',
      className
    )}
    {...props}
  >
    {children}
    <ChevronDownIcon
      className="h-4 text-primary transition duration-150 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </RadixNavigationMenuTrigger>
))
NavigationMenuTrigger.displayName = RadixNavigationMenuTrigger.displayName
