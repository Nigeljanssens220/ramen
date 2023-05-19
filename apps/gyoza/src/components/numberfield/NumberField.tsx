'use client'

import { classNames } from '@ramen/ui'
import React, { forwardRef } from 'react'
import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from '../textfield/styles'

export interface NumberFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  /**
   * Disables the Number Field.
   * @default false
   */
  disabled?: boolean
  /**
   * Enables the error mode for the Number Field.
   * @default false
   */
  error?: boolean
  /**
   * Icon to display in the Number Field.
   */
  startIcon?: React.ReactNode
  /**
   * Icon to display in the Number Field.
   */
  endIcon?: React.ReactNode
  inlineName?: string
}

const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
  ({ className, startIcon, endIcon, disabled, error = false, inlineName, ...rest }: NumberFieldProps, ref) => {
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
          type="number"
          min={0}
          pattern="^[0-9]*[.,]?[0-9]*$"
          className={classNames(
            error ? '!text-red-600' : '',
            disabled ? 'disabled:bg-transparent' : '',
            BASE_INPUT_STYLES,
            'text-primary'
          )}
          ref={ref}
          disabled={disabled}
          {...rest}
        />
        {inlineName && <span className="text-sm text-primary">{inlineName}</span>}
        {endIcon && endIcon}
      </div>
    )
  }
)

NumberField.displayName = 'NumberField'

export default NumberField
