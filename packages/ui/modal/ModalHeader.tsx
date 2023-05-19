import { classNames } from '../helpers'

export const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={classNames('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
ModalHeader.displayName = 'ModalHeader'
