export const ROOT_INPUT_STYLES =
  'flex justify-center items-center px-3.5 py-1.5 bg-tertiary bg-opacity-10 rounded-8 outline-none text-md text-background hover:ring-1 hover:ring-background active:ring-background focus-within:ring-background'
export const BASE_INPUT_STYLES = 'bg-transparent w-full outline-none'
export const INPUT_STYLES = {
  error: 'border border-red-600 hover:!ring-red-600 focus-within:ring-red-600 active:ring-red-600 !text-red-600',
  disabled: '!bg-gray-100 pointer-events-none',
} as const
