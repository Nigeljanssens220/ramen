'use client'

import { DialogOverlay } from '@radix-ui/react-dialog'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'

export const ModalOverlay = forwardRef<
  React.ElementRef<typeof DialogOverlay>,
  React.ComponentPropsWithoutRef<typeof DialogOverlay>
>(({ className, ...props }, ref) => (
  <DialogOverlay
    className={classNames(
      'fixed inset-0 z-50 bg-black bg-opacity-10 backdrop-blur-[2px] transition-all data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn',
      className
    )}
    {...props}
    ref={ref}
  />
))
ModalOverlay.displayName = DialogOverlay.displayName
