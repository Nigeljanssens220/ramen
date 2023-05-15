import DropdownTriggerButton from '../button/DropdownTriggerButton'
import CreateColumnModal from '../modal/CreateColumnModal'
import CreateStoryModal from '../modal/CreateStoryModal'
import DeleteColumnModal from '../modal/DeleteColumnModal'
import { DropdownMenu } from './Dropdown'

export interface KanbanDropdownProps {
  columnId: string
}

const KanbanDropdown: React.FC<KanbanDropdownProps> = ({ columnId }) => {
  return (
    <DropdownMenu>
      <DropdownTriggerButton />
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <CreateStoryModal columnId={columnId} />
          <CreateColumnModal />
          <DeleteColumnModal columnId={columnId} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default KanbanDropdown
