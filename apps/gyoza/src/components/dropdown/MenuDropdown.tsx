import { Bars3Icon } from '@heroicons/react/24/solid'
import { Button, DropdownMenu, Typography, classNames } from '@ramen/ui'
import Link from 'next/link'

interface Props {
  className?: string
}
const MenuDropdown: React.FC<Props> = ({ className }) => {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger
        asChild
        className={classNames(
          className,
          'bg-transparent p-1 text-primary shadow-100 data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade'
        )}
      >
        <Button className="rounded-16 px-[22px]">
          <Bars3Icon className="h-6 w-6" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="w-56">
        <DropdownMenu.Group>
          <div className="flex w-full flex-col items-center gap-y-2">
            <Link href="/stake" className="w-full rounded-16 py-2 text-center hover:bg-background hover:bg-opacity-20">
              <Typography
                as="span"
                variant="md/regular"
                className={classNames('rounded-16 bg-transparent px-4 py-2 outline-none ')}
              >
                Stake
              </Typography>
            </Link>
            <Link href="/kanban" className="w-full rounded-16 py-2 text-center hover:bg-background hover:bg-opacity-20">
              <Typography
                as="span"
                variant="md/regular"
                className={classNames('rounded-16 bg-transparent px-4 py-2 outline-none ')}
              >
                Kanban
              </Typography>
            </Link>
          </div>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu>
  )
}

export default MenuDropdown
