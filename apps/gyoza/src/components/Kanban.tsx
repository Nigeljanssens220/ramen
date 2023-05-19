import { api } from '@/utils/api'
import { Ring } from '@uiball/loaders'
import Card from './card/Card'
import KanbanColumn from './card/KanbanColumn'
import KanbanStory from './card/KanbanStory'
import CreateColumnModal from './modal/CreateColumnModal'

const Kanban: React.FC = () => {
  const { data: kanbanColumns, isLoading } = api.column.getAll.useQuery()

  return (
    <>
      <Card className="!bg-secondary !p-0">
        <CreateColumnModal />
      </Card>
      <div
        className={
          'flex h-[75vh] w-full max-w-screen-lg items-center justify-center gap-x-2 overflow-x-auto sm:h-[80vh]'
        }
      >
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
    </>
  )
}

export default Kanban
