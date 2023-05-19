import { NavigationMenu } from '@ramen/ui'

export const NavMenu: React.FC = () => {
  return (
    <NavigationMenu>
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
