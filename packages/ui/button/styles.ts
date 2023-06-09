import { cva } from 'class-variance-authority'

export const BASE_BUTTON_STYLES =
  'flex space-x-xs items-center justify-center duration-150 outline-none py-1.5 px-[22px] rounded-16 font-bold focus-visible:ring-2 focus-visible:ring-primary'
export const BUTTON_STYLES = {
  primary: 'bg-secondary text-background hover:bg-opacity-80',
  secondary: 'bg-tertiary text-primary hover:bg-opacity-80',
  base: 'bg-transparent text-background hover:bg-background hover:bg-opacity-20',
  inline: 'text-background hover:text-background/80 disabled:pointer-events-none disabled:text-background/20',
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
      true: 'disabled:text-background/30 pointer-events-none',
    },
  },
  compoundVariants: [
    {
      variant: ['primary', 'secondary', 'base'],
      className: 'focus:ring-slate-500',
    },
  ],
})
