export const ROOT_INPUT_STYLES =
  'flex justify-center items-center px-3.5 py-1.5 bg-background bg-opacity-50 rounded-8 outline-none text-md text-background'
export const BASE_INPUT_STYLES = 'bg-transparent w-full outline-none placeholder:text-slate-700'
export const INPUT_STYLES = {
  error: 'border border-red-600 hover:!ring-red-600 focus-within:ring-red-600 active:ring-red-600 !text-red-600',
  disabled: '!bg-gray-100 pointer-events-none',
} as const
