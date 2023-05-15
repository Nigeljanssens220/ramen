import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Story } from '@prisma/client'
import StoryDropdown from '../dropdown/StoryDropdown'
import Typography from '../typography/Typography'
import Card from './Card'

interface KanbanStoryProps {
  story: Story
}

const KanbanStory: React.FC<KanbanStoryProps> = ({ story }) => {
  return (
    <Card className="flex flex-col !rounded-8 px-4 py-2">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <Typography as="h3" variant="xl/semibold">
            {story.title}
          </Typography>
          <StoryDropdown storyId={story.id} />
        </div>
        <Typography as="p" variant="md/regular">
          {story.content}
        </Typography>
      </div>
      <Typography as="span" variant="md/regular" className="flex items-center justify-end">
        {story.userAddress.slice(0, 4) + '...' + story.userAddress.slice(38)}
        <UserCircleIcon className="ml-2 h-6 w-6 fill-primary" />
      </Typography>
    </Card>
  )
}

export default KanbanStory
