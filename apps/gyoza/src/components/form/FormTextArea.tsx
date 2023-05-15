import { ErrorMessage } from '@hookform/error-message'
import { forwardRef, useEffect, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import TextArea from '../textarea/TextArea'
import Typography from '../typography/Typography'

interface FormTextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  name: string
  id?: string
  className?: string
  value?: string
  label?: string
  placeholder?: string
}

const FormTextArea: React.FC<FormTextAreaProps> = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ name, id = '', className, value, label, placeholder, ...rest }) => {
    const textFieldId = useId()
    const {
      register,
      unregister,
      formState: { errors },
    } = useFormContext()

    const isError = name in errors

    useEffect(() => {
      return () => {
        unregister(name)
      }
    }, [name, unregister])

    return (
      <div className="flex w-full flex-col items-start">
        <Typography
          variant="md/regular"
          as="label"
          htmlFor={id + textFieldId}
          className="!text-background font-semibold"
        >
          {label}
        </Typography>
        <TextArea
          {...register(name)}
          id={id + textFieldId}
          placeholder={placeholder}
          value={value}
          error={isError}
          className="w-full"
          {...rest}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <Typography variant="md/regular" as="span" className="my-1 !text-red-600">
              {message}
            </Typography>
          )}
        />
      </div>
    )
  }
)

export default FormTextArea
