import { ToastViewport as RadixToastViewport } from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const ToastViewport = forwardRef<
  React.ElementRef<typeof RadixToastViewport>,
  React.ComponentPropsWithoutRef<typeof RadixToastViewport>
>(({ className, ...props }, ref) => (
  <RadixToastViewport
    ref={ref}
    className={classNames(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = RadixToastViewport.displayName
