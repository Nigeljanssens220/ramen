import { Story } from '@prisma/client'
import { DropdownMenu } from '@ramen/ui'
import { DropdownTriggerButton } from '../button'
import { DeleteStoryModal, UpdateStoryModal } from '../modal'

export interface StoryDropdownProps {
  story: Story
}

export const StoryDropdown: React.FC<StoryDropdownProps> = ({ story }) => {
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
