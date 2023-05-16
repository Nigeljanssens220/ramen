import { Column } from '@prisma/client'
import DropdownTriggerButton from '../button/DropdownTriggerButton'
import CreateColumnModal from '../modal/CreateColumnModal'
import CreateStoryModal from '../modal/CreateStoryModal'
import DeleteColumnModal from '../modal/DeleteColumnModal'
import UpdateColumnModal from '../modal/UpdateColumnModal'
import { DropdownMenu } from './Dropdown'

export interface KanbanDropdownProps {
  column: Column
}

const KanbanDropdown: React.FC<KanbanDropdownProps> = ({ column }) => {
  return (
    <DropdownMenu>
      <DropdownTriggerButton />
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <CreateStoryModal columnId={column.id} />
          <CreateColumnModal />
          <UpdateColumnModal column={column} />
          <DeleteColumnModal columnId={column.id} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default KanbanDropdown
