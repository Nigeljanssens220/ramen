import { XMarkIcon } from '@heroicons/react/24/solid'
import { DialogClose, DialogTitle } from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import { Button } from '../button/Button'
import { Typography } from '../typography'

export const ModalTitle = forwardRef<
  React.ElementRef<typeof DialogTitle>,
  React.ComponentPropsWithoutRef<typeof DialogTitle>
>(({ children, ...props }, ref) => (
  <div className="flex items-center justify-between">
    <DialogTitle asChild ref={ref} {...props}>
      <Typography as="h2" variant="lg/semibold" className="!text-background">
        {children}
      </Typography>
    </DialogTitle>
    <DialogClose asChild>
      <Button variant="sm/base" className="!rounded-sm !p-0">
        <XMarkIcon className="fill-background hover:bg-background h-6 w-6 rounded-4 hover:fill-primary" />
        <span className="sr-only">Close</span>
      </Button>
    </DialogClose>
  </div>
))
ModalTitle.displayName = DialogTitle.displayName
