import { classNames } from '@ramen/ui'
import KanbanDropdown from '../dropdown/KanbanDropdown'
import Card from './Card'

interface KanbanColumnProps extends React.ComponentPropsWithoutRef<'div'> {
  title: string
  columnId: string
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, columnId, children }) => {
  return (
    <Card className="h-[100%] w-96">
      <Card className="px-4 py-2">
        <div className="flex items-center justify-between">
          {title}
          {/* <CreateStoryModal /> */}
          <KanbanDropdown columnId="clhoheknh0000rymy8nh6wm6t" />
        </div>
        <div className={classNames(children && 'mt-2', 'flex flex-col gap-y-1')}>{children}</div>
      </Card>
    </Card>
  )
}

export default KanbanColumn
