import { NavigationMenuLink as RadixNavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { classNames } from '@ramen/ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'
import Typography from '../typography/Typography'

export const NavigationMenuLink = forwardRef<
  React.ElementRef<typeof RadixNavigationMenuLink>,
  React.ComponentPropsWithoutRef<typeof RadixNavigationMenuLink>
>(({ href = '/', className, children, ...props }, ref) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href} className="rounded-16 py-2 focus-visible:outline-primary">
      <Typography
        as="span"
        variant="md/regular"
        className={classNames(
          isActive ? '!bg-primary !text-background' : '',
          'rounded-16 bg-transparent px-4 py-2 text-primary outline-none hover:bg-primary hover:bg-opacity-20'
        )}
      >
        {children}
      </Typography>
    </Link>
  )
})

NavigationMenuLink.displayName = RadixNavigationMenuLink.displayName
