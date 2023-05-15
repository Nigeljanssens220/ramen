import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Button from '../button/Button'
import CreateStoryModal from '../modal/CreateStoryModal'
import { DropdownMenu } from './Dropdown'

const KanbanDropdown: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <Button>
          <EllipsisVerticalIcon className="h-6 w-6 fill-primary" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <CreateStoryModal />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default KanbanDropdown
