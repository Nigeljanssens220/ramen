import { PopoverProps, Popover as RadixPopover } from '@radix-ui/react-popover'
import { PopoverContent } from './PopoverContent'
import { PopoverTrigger } from './PopoverTrigger'

export const Popover: React.FC<PopoverProps> & {
  Trigger: typeof PopoverTrigger
  Content: typeof PopoverContent
} = Object.assign(RadixPopover, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
})
