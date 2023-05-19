import { Tabs as RadixTabs, type TabsProps } from '@radix-ui/react-tabs'
import type { FC } from 'react'
import { TabsContent } from './TabsContent'
import { TabsList } from './TabsList'
import { TabsTrigger } from './TabsTrigger'

export const Tabs: FC<TabsProps> & {
  List: typeof TabsList
  Trigger: typeof TabsTrigger
  Content: typeof TabsContent
} = Object.assign(RadixTabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})
