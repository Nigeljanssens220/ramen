import NavigationMenu from './NavigationMenu'

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = ({}) => {
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

export default NavMenu
