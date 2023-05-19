import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { classNames } from '../helpers'
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from '../types'
import { BASE_TYPOGRAPHY_CLASSNAMES } from './styles'

export const typographyStyles = cva(BASE_TYPOGRAPHY_CLASSNAMES, {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    weight: {
      italic: 'italic',
      regular: 'font-normal',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
})

export type TypographyStylesProps = VariantProps<typeof typographyStyles>
export type TypographyVariant = `${NonNullable<TypographyStylesProps['size']>}/${NonNullable<
  TypographyStylesProps['weight']
>}`

type Props = {
  /**
   * This prop is of type string and is used to determine the text appearance of the component. It has a default value of medium/normal.
   * The format of this string should be size/weight, where size is one of sm, md, lg or xl and weight is one of italic, regular or bold.
   * For example, to set the size to medium and the weight to bold, the variant prop would be set to "md/bold".
   */
  variant: TypographyVariant
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * Children elements of the component.
   */
  children: React.ReactNode
}

export type TypographyProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>
export type TypographyComponent = <C extends React.ElementType = 'div'>(
  props: TypographyProps<C>
) => React.ReactElement | null

export const Typography: TypographyComponent = forwardRef(
  <Tag extends React.ElementType = 'div'>(
    { as, variant, className, children, ...rest }: TypographyProps<Tag>,
    ref?: PolymorphicRef<Tag>
  ) => {
    const [size, weight] = variant.split('/') as [TypographyStylesProps['size'], TypographyStylesProps['weight']]
    const Component = as || 'div'

    return (
      <Component className={classNames(className, typographyStyles({ size, weight }))} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)
