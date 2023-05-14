'use client'

import { DialogContent } from '@radix-ui/react-dialog'
import { classNames } from '@ramen/ui'
import { forwardRef } from 'react'
import { ModalOverlay } from './ModalOverlay'
import { ModalPortal } from './ModalPortal'

export const MODAL_SIZE = {
  sm: 'max-w-xs', // 320px
  md: 'max-w-[600px]',
  lg: 'max-w-[820px]',
  xl: 'max-w-screen-md', // 1280px
} as const

export interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogContent> {
  /**
   * Size of the modal. Defaults to `md`. Provided sizes are `sm`, `md`, `lg`, and `full`.
   */
  size?: keyof typeof MODAL_SIZE
}

export const ModalContent = forwardRef<React.ElementRef<typeof DialogContent>, ModalContentProps>(
  ({ className, size = 'md', children, ...props }, ref) => (
    <ModalPortal>
      <ModalOverlay />
      <DialogContent
        ref={ref}
        className={classNames(
          className,
          'fixed z-50 grid w-full gap-4 overflow-x-hidden bg-primary px-6 py-4 shadow-300 data-[state=open]:animate-fadeIn sm:rounded-16',
          MODAL_SIZE[size]
        )}
        {...props}
      >
        {children}
      </DialogContent>
    </ModalPortal>
  )
)
ModalContent.displayName = DialogContent.displayName
