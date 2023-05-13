import Image from 'next/image'
import Link from 'next/link'
import NavMenu from '../navigation-menu/NavMenu'
import { WalletButton } from '../wagmi/Profile'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 flex w-screen items-center justify-between py-4 pl-12 pr-4 text-primary">
      <Link className="flex items-center gap-x-4" href="/">
        <Image src="/ramen.png" alt="Ramen bowl" width={32} height={32} />
        Ramen
      </Link>
      <div className="flex items-center gap-x-4">
        <NavMenu />
        <WalletButton />
      </div>
    </nav>
  )
}

export default Navbar
