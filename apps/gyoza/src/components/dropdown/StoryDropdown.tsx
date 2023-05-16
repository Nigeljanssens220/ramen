import { Story } from '@prisma/client'
import DropdownTriggerButton from '../button/DropdownTriggerButton'
import DeleteStoryModal from '../modal/DeleteStoryModal'
import UpdateStoryModal from '../modal/UpdateStoryModal'
import { DropdownMenu } from './Dropdown'

export interface StoryDropdownProps {
  story: Story
}

const StoryDropdown: React.FC<StoryDropdownProps> = ({ story }) => {
  return (
    <DropdownMenu>
      <DropdownTriggerButton />
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <UpdateStoryModal story={story} />
          <DeleteStoryModal storyId={story.id} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default StoryDropdown
