import { Column } from '@prisma/client'
import { DropdownMenu } from '@ramen/ui'
import { DropdownTriggerButton } from '../button'
import { CreateColumnModal, CreateStoryModal, DeleteColumnModal, UpdateColumnModal } from '../modal'

export interface KanbanDropdownProps {
  column: Column
}

export const KanbanDropdown: React.FC<KanbanDropdownProps> = ({ column }) => {
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
