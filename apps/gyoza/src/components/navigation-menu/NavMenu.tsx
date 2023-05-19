import { NavigationMenu } from '@ramen/ui'

interface Props {
  className: string
}

export const NavMenu: React.FC<Props> = ({ className }) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/stake">Stake</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="/kanban">Kanban</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  )
}
