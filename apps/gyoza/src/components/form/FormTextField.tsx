import { ErrorMessage } from '@hookform/error-message'
import { forwardRef, useEffect, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import TextField from '../textfield/TextField'
import Typography from '../typography/Typography'

interface FormTextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string
  id?: string
  className?: string
  value?: string
  label?: string
  placeholder?: string
}

const FormTextField: React.FC<FormTextFieldProps> = forwardRef<HTMLInputElement, FormTextFieldProps>(
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
        <TextField
          {...register(name)}
          id={id + textFieldId}
          placeholder={placeholder}
          value={value}
          error={true}
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

export default FormTextField
