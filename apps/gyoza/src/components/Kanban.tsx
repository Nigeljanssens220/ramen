import { api } from '@/utils/api'
import { Ring } from '@uiball/loaders'
import { KanbanColumn, KanbanStory } from './card'
import { CreateColumnModal } from './modal'

export const Kanban: React.FC = () => {
  const { data: kanbanColumns, isLoading } = api.column.getAll.useQuery()

  return (
    <div className="flex w-full flex-col items-center gap-y-2 overflow-auto p-4">
      <CreateColumnModal />
      <div className={'flex h-[75vh] items-center justify-center gap-x-2 sm:h-[80vh]'}>
        {isLoading ? (
          <Ring size={40} lineWeight={5} speed={2} color="#f8fedc" />
        ) : (
          kanbanColumns.map((column) => {
            const { id, title, stories } = column

            return (
              <KanbanColumn column={column} title={title} key={id}>
                {stories.map((story) => (
                  <KanbanStory story={story} key={story.id} />
                ))}
              </KanbanColumn>
            )
          })
        )}
      </div>
    </div>
  )
}
