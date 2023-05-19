import { classNames } from '@ramen/ui'
import { type VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { buttonStyles } from './styles'

export type ButtonStylesProps = VariantProps<typeof buttonStyles>
export type ButtonVariant = `${NonNullable<ButtonStylesProps['size']>}/${NonNullable<ButtonStylesProps['variant']>}`

/**
 * Props for the Button component.
 * Inherits all props from React.ButtonHTMLAttributes<HTMLButtonElement>.
 */
export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * This prop is of type string and is used to determine the appearance of the button. It has a default value of md/primary.
   * The format of this string should be size/variant, where size is one of sm or md and the variant is one of primary, secondary or base.
   * For example, to set the size to small and the variant to primary, the variant prop would be set to "sm/primary".
   */
  variant?: ButtonVariant
  /**
   * Disables the button.
   * @default false
   */
  disabled?: boolean
  /**
   * Makes the button full width.
   * @default false
   */
  fullWidth?: boolean
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = 'md/primary', fullWidth = false, disabled = false, ...rest }: ButtonProps, ref) => {
    const [size, buttonVariant] = variant.split('/') as [ButtonStylesProps['size'], ButtonStylesProps['variant']]

    return (
      <button
        {...rest}
        disabled={disabled}
        ref={ref}
        className={classNames(buttonStyles({ fullWidth, disabled, size, variant: buttonVariant }), className)}
      >
        {children}
      </button>
    )
  }
)

export default Button
