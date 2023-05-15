import { DialogClose, type DialogCloseProps } from '@radix-ui/react-dialog'
import Button from '../button/Button'

export const ModalClose: React.FC<DialogCloseProps> = ({ className, children, ...props }) => {
  return (
    <DialogClose asChild {...props}>
      <Button variant="md/secondary" className={className}>
        {children}
        <span className="sr-only">Close</span>
      </Button>
    </DialogClose>
  )
}
ModalClose.displayName = DialogClose.displayName
