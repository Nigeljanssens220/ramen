import { DialogDescription } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'

export const ModalDescription = forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, ...props }, ref) => <DialogDescription asChild ref={ref} className={className} {...props} />)
ModalDescription.displayName = DialogDescription.displayName
