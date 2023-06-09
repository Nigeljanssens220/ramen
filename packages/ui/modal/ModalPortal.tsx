import { DialogPortal, type DialogPortalProps } from '@radix-ui/react-dialog'

export const ModalPortal = ({ children, ...props }: DialogPortalProps) => (
  <DialogPortal {...props}>
    <div className="fixed inset-0 z-50 flex items-center justify-center">{children}</div>
  </DialogPortal>
)
ModalPortal.displayName = DialogPortal.displayName
