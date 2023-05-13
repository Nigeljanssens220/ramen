import { cva } from 'class-variance-authority'

export const BASE_BUTTON_STYLES =
  'flex space-x-xs items-center justify-center duration-150 outline-none py-1.5 px-[22px] rounded-16 font-bold focus-visible:ring-2 focus-visible:ring-primary'
export const BUTTON_STYLES = {
  primary: 'bg-secondary text-background hover:bg-opacity-80',
  secondary: 'bg-tertiary text-primary hover:bg-opacity-80',
  base: 'text-slate-600 hover:text-slate-800 hover:bg-slate-100 active:text-slate-800 active:bg-slate-300',
  inline:
    'text-slate-500 hover:text-primary-600 focus:underline focus:decoration-slate-800 focus:underline-offset-4 active:text-slate-800 disabled:pointer-events-none disabled:text-primary-400',
} as const

export const buttonStyles = cva(BASE_BUTTON_STYLES, {
  variants: {
    variant: {
      primary: BUTTON_STYLES.primary,
      secondary: BUTTON_STYLES.secondary,
      base: BUTTON_STYLES.base,
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
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'base'],
      className: 'focus:ring-slate-500',
    },
  ],
})
