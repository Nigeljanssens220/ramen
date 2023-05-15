import DropdownTriggerButton from '../button/DropdownTriggerButton'
import DeleteStoryModal from '../modal/DeleteStoryModal'
import { DropdownMenu } from './Dropdown'

export interface StoryDropdownProps {
  storyId: number
}

const StoryDropdown: React.FC<StoryDropdownProps> = ({ storyId }) => {
  return (
    <DropdownMenu>
      <DropdownTriggerButton />
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <DeleteStoryModal storyId={storyId} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default StoryDropdown
