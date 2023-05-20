import { ToastDescription as RadixToastDescription } from '@radix-ui/react-toast'
import { forwardRef } from 'react'
import { Typography } from '../typography'

export const ToastDescription = forwardRef<
  React.ElementRef<typeof RadixToastDescription>,
  React.ComponentPropsWithoutRef<typeof RadixToastDescription>
>(({ className, children, ...props }, ref) => (
  <RadixToastDescription ref={ref} className={className} {...props}>
    <Typography as="span" variant="sm/regular" className="text-primary">
      {children}
    </Typography>
  </RadixToastDescription>
))
ToastDescription.displayName = RadixToastDescription.displayName
