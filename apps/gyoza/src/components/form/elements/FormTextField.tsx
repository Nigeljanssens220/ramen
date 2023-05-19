import { ErrorMessage } from '@hookform/error-message'
import { Typography, classNames } from '@ramen/ui'
import { INPUT_STYLES, ROOT_INPUT_STYLES } from '@ramen/ui/textfield/styles'
import { useEffect, useId } from 'react'
import { useFormContext } from 'react-hook-form'

interface FormTextFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string
  id?: string
  className?: string
  value?: string
  label?: string
  placeholder?: string
}

export const FormTextField: React.FC<FormTextFieldProps> = ({
  name,
  id = '',
  className,
  value,
  label,
  placeholder,
  disabled,
  ...rest
}) => {
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
    <div className="flex w-full flex-col items-start gap-y-1">
      <Typography variant="md/regular" as="label" htmlFor={id + textFieldId} className="font-semibold !text-background">
        {label}
      </Typography>
      <input
        {...register(name)}
        {...rest}
        type="text"
        id={id + textFieldId}
        placeholder={placeholder}
        value={value}
        className={classNames(
          className,
          ROOT_INPUT_STYLES,
          isError ? INPUT_STYLES.error : '',
          disabled ? INPUT_STYLES.disabled : '',
          'w-full'
        )}
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
