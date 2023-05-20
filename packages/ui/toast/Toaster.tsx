import { Toast } from './Toast'
import { useToast } from './useToast'

export const Toaster = () => {
  const { toasts } = useToast()

  return (
    <Toast.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && <Toast.Description>{description}</Toast.Description>}
            </div>
            {action}
            <Toast.Close />
          </Toast>
        )
      })}
      <Toast.Viewport />
    </Toast.Provider>
  )
}
