export const ROOT_INPUT_STYLES =
  'flex justify-center items-center px-3.5 py-1.5 bg-white rounded-8 outline-none placeholder text-lg border text-primary-500 hover:ring-1 hover:ring-primary-500 active:ring-accent-orange-500 focus-within:border-accent-orange-500 focus-within:!ring-accent-orange-500'
export const BASE_INPUT_STYLES = 'w-full outline-none'
export const INPUT_STYLES = {
  error:
    'border-feedback-red-600 hover:!ring-feedback-red-600 focus-within:!ring-feedback-red-600 active:!ring-feedback-red-600',
  disabled: '!bg-primary-100 pointer-events-none border-primary-200',
} as const
