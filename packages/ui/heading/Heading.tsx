import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { classNames } from '../helpers'
import { BASE_TYPOGRAPHY_CLASSNAMES } from '../typography/styles'

export const HeadingStyles = cva(classNames(BASE_TYPOGRAPHY_CLASSNAMES, 'text-heading-large'), {
  variants: {
    variant: {
      heavy: 'font-bold',
      light: 'font-thin',
    },
  },
})

type HeadingStyles = VariantProps<typeof HeadingStyles>
export type HeadingVariant = Exclude<HeadingStyles['variant'], null | undefined>

export interface HeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  /**
   * This prop is of type string and is used to determine the text appearance of the component. Heavy or light.
   * @required
   */
  variant: Exclude<HeadingStyles['variant'], null | undefined>
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * Children elements of the component.
   */
  children: React.ReactNode
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant, className = '', children, ...rest }: HeadingProps, ref) => {
    return (
      <h1 ref={ref} className={classNames(className, HeadingStyles({ variant }))} {...rest}>
        {children}
      </h1>
    )
  }
)

Heading.displayName = 'Heading'
