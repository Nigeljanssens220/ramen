import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Button from '../button/Button'
import CreateStoryModal from '../modal/CreateStoryModal'
import { DropdownMenu } from './Dropdown'

export interface KanbanDropdownProps {
  columnId: string
}

const KanbanDropdown: React.FC<KanbanDropdownProps> = ({ columnId }) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>
          <EllipsisVerticalIcon className="fill-background h-6 w-6" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <CreateStoryModal columnId={columnId} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default KanbanDropdown
