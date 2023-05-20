import { XMarkIcon } from '@heroicons/react/24/solid'
import { ToastClose as RadixToastClose } from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const ToastClose = forwardRef<
  React.ElementRef<typeof RadixToastClose>,
  React.ComponentPropsWithoutRef<typeof RadixToastClose>
>(({ className, ...props }, ref) => (
  <RadixToastClose
    ref={ref}
    className={classNames(
      'absolute right-2 top-2 rounded-md p-1 opacity-0 transition-opacity focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100',
      className
    )}
    toast-close=""
    {...props}
  >
    <XMarkIcon className="h-4 w-4 fill-primary" />
  </RadixToastClose>
))
ToastClose.displayName = RadixToastClose.displayName
