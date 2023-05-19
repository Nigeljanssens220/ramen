import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Button, DropdownMenuTrigger, classNames } from '@ramen/ui'

interface Props {
  className?: string
}

export const DropdownTriggerButton: React.FC<Props> = ({ className }) => {
  return (
    <DropdownMenuTrigger asChild className={classNames(className, '!px-1')}>
      <Button variant="md/base">
        <EllipsisVerticalIcon className="h-6 w-6 fill-background" />
      </Button>
    </DropdownMenuTrigger>
  )
}
