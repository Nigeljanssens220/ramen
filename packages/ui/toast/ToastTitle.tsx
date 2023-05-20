import { ToastTitle as RadixToastTitle } from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { Typography } from '../typography'

export const ToastTitle = forwardRef<
  React.ElementRef<typeof RadixToastTitle>,
  React.ComponentPropsWithoutRef<typeof RadixToastTitle>
>(({ className, children, ...props }, ref) => (
  <RadixToastTitle ref={ref} className={className} {...props} asChild>
    <Typography as="h5" variant="sm/semibold" className="text-primary">
      {children}
    </Typography>
  </RadixToastTitle>
))
ToastTitle.displayName = RadixToastTitle.displayName
