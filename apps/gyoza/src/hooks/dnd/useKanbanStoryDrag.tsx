import { api } from '@/utils/api'
import { Story } from '@prisma/client'
import { useDrag } from 'react-dnd'

export interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}

type DragProps = {
  story: Story
  type: string
}

export const useKanbanStoryDrag = ({ story, type }: DragProps) => {
  const updateStory = api.story.update.useMutation()
  const utils = api.useContext()

  const [utilities, drag] = useDrag(
    () => ({
      type,
      item: { story },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult() as DropResult

        if (!item || !dropResult) return
        if (item.story.columnId === dropResult.name) return // prevent unnecessary mutation

        updateStory.mutate(
          { id: item.story.id, columnId: dropResult.name },
          {
            onSuccess: () => {
              utils.column.invalidate()
            },
          }
        )
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [name]
  )

  return { utilities, drag }
}
