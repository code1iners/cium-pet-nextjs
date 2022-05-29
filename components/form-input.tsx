import { UseFormRegisterReturn } from "react-hook-form";

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface FormInputProps {
  register: UseFormRegisterReturn;
  error?: string;
  type: InputType;
  placeholder?: string;
  autoComplete?: boolean;
  autoCapitalize?: boolean;
  required?: boolean;
}

export default function FormInput({
  register,
  error,
  type,
  placeholder,
  autoComplete = false,
  autoCapitalize = false,
  required = true,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        {...register}
        className="form-input"
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        autoCapitalize={autoCapitalize ? "on" : "off"}
        required={required}
      />
      {error ? <span className="text-red-400 text-sm">{error}</span> : null}
    </div>
  );
}
