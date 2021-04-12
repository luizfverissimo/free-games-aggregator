function Button({ onClickButton, className, children }) {
  return (
    <button
      type='button'
      onClick={onClickButton}
      className={`w-full bg-gradient-to-r py-2 from-theme-blue-overlay-from to-theme-blue-overlay-to font-mont font-semibold text-sm text-theme-white transition-all hover:ring-2 ring-blue-300  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
