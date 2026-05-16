import "./Button.css";

function Button({
  children,
  type = "button",
  className = "",
  onClick,
  disabled = false,
  ariaLabel,
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;