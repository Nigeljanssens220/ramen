import { Root as RadixToastRoot, ToastProvider, type ToastProps as RadixToastProps } from '@radix-ui/react-toast'
import * as React from 'react'
import { classNames } from '../helpers'
import { ToastAction } from './ToastAction'
import { ToastClose } from './ToastClose'
import { ToastDescription } from './ToastDescription'
import { ToastTitle } from './ToastTitle'
import { ToastViewport } from './ToastViewport'

export type ToastActionElement = React.ReactElement<typeof Toast.Action>
export type ToastProps = RadixToastProps

const ToastRoot = React.forwardRef<
  React.ElementRef<typeof RadixToastRoot>,
  React.ComponentPropsWithoutRef<typeof RadixToastRoot>
>(({ className, ...props }, ref) => {
  return (
    <RadixToastRoot
      ref={ref}
      className={classNames(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-primary bg-background p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-fadeOut data-[state=closed]:animate-slideRightAndFade data-[state=open]:animate-fadeIn data-[state=open]:animate-slideInFromTop data-[swipe=end]:animate-fadeOut data-[swipe=move]:transition-none data-[state=open]:sm:animate-slideInFromBottom',
        className
      )}
      {...props}
    />
  )
})
ToastRoot.displayName = RadixToastRoot.displayName

export const Toast: React.FC<ToastProps> & {
  Action: typeof ToastAction
  Close: typeof ToastClose
  Description: typeof ToastDescription
  Provider: typeof ToastProvider
  Title: typeof ToastTitle
  Viewport: typeof ToastViewport
} = Object.assign(ToastRoot, {
  Action: ToastAction,
  Close: ToastClose,
  Description: ToastDescription,
  Provider: ToastProvider,
  Title: ToastTitle,
  Viewport: ToastViewport,
})
