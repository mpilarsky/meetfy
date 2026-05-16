import "./FormInput.css";

function FormInput({
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className = "",
  inputClassName = "",
  readOnly = false,
  disabled = false,
  required = false,
  autoComplete,
}) {
  return (
    <label className={className}>
      {label && <span>{label}</span>}

      <input
        className={inputClassName}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
      />
    </label>
  );
}

export default FormInput;