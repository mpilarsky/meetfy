import "./FormTextarea.css";

function FormTextarea({
  label,
  name,
  value,
  placeholder,
  onChange,
  className = "",
  textareaClassName = "",
  readOnly = false,
  disabled = false,
  required = false,
  rows,
}) {
  return (
    <label className={className}>
      {label && <span>{label}</span>}

      <textarea
        className={textareaClassName}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        rows={rows}
      />
    </label>
  );
}

export default FormTextarea;