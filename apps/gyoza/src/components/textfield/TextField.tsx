'use client'

import { classNames } from '@ramen/ui'
import React, { forwardRef, useId } from 'react'
import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from './styles'

export interface TextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Disables the Text Field.
   * @default false
   */
  disabled: boolean
  /**
   * Enables the error mode for the Text Field.
   * @default false
   */
  error?: boolean
  /**
   * Icon to display in the Text Field.
   */
  startIcon?: React.ReactNode
  /**
   * Icon to display in the Text Field.
   */
  endIcon?: React.ReactNode
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ className, startIcon, endIcon, disabled, error = false, ...rest }: TextFieldProps, ref) => {
    const textFieldId = useId()

    return (
      <div
        className={classNames(
          className,
          ROOT_INPUT_STYLES,
          error ? INPUT_STYLES.error : '',
          disabled ? INPUT_STYLES.disabled : ''
        )}
      >
        {startIcon && startIcon}
        <input
          id={textFieldId}
          className={classNames(
            error ? '!text-feedback-red-600' : '',
            disabled ? 'disabled:bg-transparent' : '',
            BASE_INPUT_STYLES
          )}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
        {endIcon && endIcon}
      </div>
    )
  }
)

TextField.displayName = 'TextField'

export default TextField
