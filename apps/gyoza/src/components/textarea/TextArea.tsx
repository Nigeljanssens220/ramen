'use client'

import { classNames } from '@ramen/ui'
import React, { forwardRef } from 'react'
import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from '../textfield/styles'

export interface TextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  /**
   * Disables the Text Field.
   * @default false
   */
  disabled?: boolean
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

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, startIcon, endIcon, disabled, error = false, ...rest }: TextAreaProps, ref) => {
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
        <textarea
          className={classNames(
            error ? '!text-red-600' : '',
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

TextArea.displayName = 'TextArea'

export default TextArea
