import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Button, DropdownMenuTrigger } from '@ramen/ui'

export const DropdownTriggerButton: React.FC = () => {
  return (
    <DropdownMenuTrigger asChild className="!px-1">
      <Button variant="md/base">
        <EllipsisVerticalIcon className="h-6 w-6 fill-background" />
      </Button>
    </DropdownMenuTrigger>
  )
}
