import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import Button from '../button/Button'
import DeleteStoryModal from '../modal/DeleteStoryModal'
import { DropdownMenu } from './Dropdown'

export interface StoryDropdownProps {
  storyId: number
}

const StoryDropdown: React.FC<StoryDropdownProps> = ({ storyId }) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild className="px-1">
        <Button variant="md/base">
          <EllipsisVerticalIcon className="h-6 w-6 fill-primary" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <DeleteStoryModal storyId={storyId} />
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default StoryDropdown
