import { ToastAction as RadixToastAction } from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { classNames } from '../helpers'

export const ToastAction = forwardRef<
  React.ElementRef<typeof RadixToastAction>,
  React.ComponentPropsWithoutRef<typeof RadixToastAction>
>(({ className, ...props }, ref) => (
  <RadixToastAction
    ref={ref}
    className={classNames(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-transparent transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
    {...props}
  />
))
ToastAction.displayName = RadixToastAction.displayName
