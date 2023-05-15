import { ErrorMessage } from '@hookform/error-message'
import { classNames } from '@ramen/ui'
import { useEffect, useId } from 'react'
import { useFormContext } from 'react-hook-form'
import { INPUT_STYLES, ROOT_INPUT_STYLES } from '../textfield/styles'
import Typography from '../typography/Typography'

interface FormTextAreaProps extends React.ComponentPropsWithoutRef<'textarea'> {
  name: string
  id?: string
  className?: string
  value?: string
  label?: string
  placeholder?: string
}

const FormTextArea: React.FC<FormTextAreaProps> = ({
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
      <Typography variant="md/regular" as="label" htmlFor={id + textFieldId} className="!text-background font-semibold">
        {label}
      </Typography>
      <textarea
        {...register(name)}
        {...rest}
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

export default FormTextArea
