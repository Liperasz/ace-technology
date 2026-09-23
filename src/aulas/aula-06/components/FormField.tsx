import type { ChangeEvent } from 'react'

interface FormFieldProps {
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  message: string
  valid: boolean
  touched: boolean
}

// Input mais mensagem de validação, reutilizado nos 3 campos do formulário de Profile
function FormField({ label, type, placeholder, value, onChange, message, valid, touched }: FormFieldProps) {
  const borderColor = !touched ? 'border-ink' : valid ? 'border-green-500' : 'border-red-500'
  const textColor = valid ? 'text-green-500' : 'text-red-500'

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-[0.1em]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full py-3 px-4 bg-transparent border rounded-2xl outline-none transition-colors duration-300 ${borderColor}`}
      />
      <p className={`text-xs tracking-[0.02em] ${touched ? textColor : ''}`}>{touched ? message : ''}</p>
    </div>
  )
}

export default FormField
