import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Button from '../button/Button'
import CreateStoryModal from '../modal/CreateStoryModal'
import DeleteColumnModal from '../modal/DeleteColumnModal'
import { DropdownMenu } from './Dropdown'

export interface KanbanDropdownProps {
  columnId: string
}

const KanbanDropdown: React.FC<KanbanDropdownProps> = ({ columnId }) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild className="px-1">
        <Button variant="md/base">
          <EllipsisVerticalIcon className="h-6 w-6 fill-primary" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <CreateStoryModal columnId={columnId} />
          <DeleteColumnModal columnId={columnId} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default KanbanDropdown
