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
    <label className={`meetfy-wrapper ${className}`.trim()}>
      {label && <span>{label}</span>}

      <input
        className={`meetfy-field ${inputClassName}`.trim()}
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