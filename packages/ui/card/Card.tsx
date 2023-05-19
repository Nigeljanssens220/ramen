import { forwardRef } from 'react'
import { classNames } from '../helpers'

export interface CardProps extends React.ComponentProps<'div'> {
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
  /**
   * Children elements of the card.
   */
  children: React.ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...rest }: CardProps, ref) => {
  return (
    <div ref={ref} className={classNames(className, 'bg-opacity rounded-16 bg-primary p-2 shadow-200')} {...rest}>
      {children}
    </div>
  )
})

Card.displayName = 'Card'
