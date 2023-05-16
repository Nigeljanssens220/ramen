import { ItemTypes } from '@/constants/itemTypes'
import { Story } from '@prisma/client'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'

export interface DropResult {
  allowedDropEffect: string
  dropEffect: string
  name: string
}

type DragProps = {
  story: Story
  type: string
}

export const useKanbanStoryDrop = ({ story, type }: DragProps) => {
  const [stories, setStories] = useState<Story[]>([])

  const findCard = useCallback(
    (id: string) => {
      const story = stories.filter((story) => String(story.id) === id)[0]

      return {
        story,
        index: stories.indexOf(story),
      }
    },
    [stories]
  )

  const moveCard = useCallback(
    (id: string, atIndex: number) => {
      const { story, index } = findCard(id)
      setStories((prev) => {
        const newStories = [...prev]
        newStories.splice(index, 1)
        newStories.splice(atIndex, 0, story)
        return newStories
      })
    },
    [findCard, stories, setStories]
  )

  const [utilities, drop] = useDrop(
    () => ({
      accept: ItemTypes.KANBANSTORY,
      hover: ({ id: draggedId }: Story) => {
        if (draggedId !== story.id) {
          const { index: overIndex } = findCard(String(story.id))
          moveCard(String(draggedId), overIndex)
        }
      },
    }),
    [findCard, moveCard]
  )

  return { utilities, drop, stories, setStories, findCard, moveCard }
}
