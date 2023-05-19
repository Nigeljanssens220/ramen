import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import * as React from 'react'
import { DropdownMenuContent } from './DropdownContent'
import { DropdownMenuItem } from './DropdownItem'

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuGroup = DropdownMenuPrimitive.Group
const DropdownMenuPortal = DropdownMenuPrimitive.Portal
const DropdownMenuSub = DropdownMenuPrimitive.Sub

export const DropdownMenu: React.FC<DropdownMenuPrimitive.DropdownMenuProps> & {
  Trigger: typeof DropdownMenuTrigger
  Content: typeof DropdownMenuContent
  Item: typeof DropdownMenuItem
  Group: typeof DropdownMenuGroup
  Portal: typeof DropdownMenuPortal
  Sub: typeof DropdownMenuSub
} = Object.assign(DropdownMenuPrimitive.Root, {
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuSub,
})
