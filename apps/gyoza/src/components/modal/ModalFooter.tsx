import { classNames } from '@ramen/ui'

export const ModalFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classNames('flex items-center justify-end gap-2', className)} {...props}>
      {children}
    </div>
  )
}
ModalFooter.displayName = 'ModalFooter'
