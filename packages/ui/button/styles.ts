import { cva } from 'class-variance-authority'
import { classNames } from '../helpers'

export const BASE_BUTTON_STYLES = 'flex space-x-xs items-center justify-center duration-150 outline-none'
export const BUTTON_STYLES = {
  default: 'py-1.5 px-[22px] rounded-[40px] font-bold focus:ring-2 focus:ring-offset-2 focus:ring-accent-orange-500',
  primary:
    'bg-accent-orange-500 text-white hover:bg-accent-orange-800 active:bg-accent-orange-800 disabled:bg-primary-200',
  secondary:
    'border-2 border-accent-orange-600 bg-primary-100/0 text-accent-orange-600 hover:border-accent-orange-800 hover:text-accent-orange-800 hover:bg-accent-orange-100 focus:ring-1 focus:ring-offset-0 active:border-accent-orange-800 active:text-accent-orange-800 active:bg-accent-orange-300',
  base: 'text-accent-orange-600 hover:text-accent-orange-800 hover:bg-accent-orange-100 active:text-accent-orange-800 active:bg-accent-orange-300',
  inline:
    'text-accent-orange-500 hover:text-primary-600 focus:underline focus:decoration-accent-orange-800 focus:underline-offset-4 active:text-accent-orange-800 disabled:pointer-events-none disabled:text-primary-400',
} as const

export const buttonStyles = cva(BASE_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: classNames(BUTTON_STYLES.default, BUTTON_STYLES.primary),
      secondary: classNames(BUTTON_STYLES.default, BUTTON_STYLES.secondary),
      base: classNames(BUTTON_STYLES.default, BUTTON_STYLES.base),
      inline: BUTTON_STYLES.inline,
    },
    size: {
      sm: 'text-md',
      md: 'text-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
    disabled: {
      true: 'disabled:text-primary-400 pointer-events-none',
    },
  },
})
