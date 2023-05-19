import { ItemTypes } from '@/constants/itemTypes'
import { useKanbanStoryDrag } from '@/hooks/dnd/useKanbanStoryDrag'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { Story } from '@prisma/client'
import { Card, Typography, classNames } from '@ramen/ui'
import { StoryDropdown } from '../dropdown'

interface KanbanStoryProps {
  story: Story
}

export const KanbanStory: React.FC<KanbanStoryProps> = ({ story }) => {
  const {
    utilities: { isDragging },
    drag,
  } = useKanbanStoryDrag({ story, type: ItemTypes.KANBANSTORY })

  return (
    <Card
      ref={drag}
      className={classNames(
        isDragging ? 'cursor-grabbing' : 'hover:cursor-grab',
        'flex flex-col !rounded-8 !bg-background !bg-opacity-20 px-4 py-2'
      )}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between">
          <Typography as="h3" variant="xl/semibold">
            {story.title}
          </Typography>
          <StoryDropdown story={story} />
        </div>
        <Typography as="p" variant="md/regular" className="truncate">
          {story.content}
        </Typography>
      </div>
      <Typography as="span" variant="md/regular" className="flex items-center justify-end">
        {story.userAddress.slice(0, 4) + '...' + story.userAddress.slice(38)}
        <UserCircleIcon className="ml-2 h-6 w-6 fill-background" />
      </Typography>
    </Card>
  )
}
