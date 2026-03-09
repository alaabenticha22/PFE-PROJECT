// ─── Button ──────────────────────────────────────────────────────────────────
export const Button = ({ children, variant = "primary", loading, className = "", ...props }) => {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };
  return (
    <button className={`${variants[variant]} ${className}`} disabled={loading} {...props}>
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

// ─── Input ───────────────────────────────────────────────────────────────────
export const Input = ({ label, error, className = "", ...props }) => (
  <div className="w-full">
    {label && <label className="label">{label}</label>}
    <input className={`input ${error ? "border-red-500 focus:ring-red-500" : ""} ${className}`} {...props} />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

// ─── Alert ───────────────────────────────────────────────────────────────────
export const Alert = ({ type = "error", message }) => {
  if (!message) return null;
  const styles = {
    error: "bg-red-50 border-red-200 text-red-700",
    success: "bg-green-50 border-green-200 text-green-700",
    info: "bg-blue-50 border-blue-200 text-blue-700",
  };
  return (
    <div className={`px-4 py-3 rounded-lg border text-sm ${styles[type]}`}>
      {message}
    </div>
  );
};

// ─── Spinner ─────────────────────────────────────────────────────────────────
export const Spinner = ({ size = "md" }) => {
  const sizes = { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" };
  return (
    <svg className={`animate-spin ${sizes[size]} text-primary-600`} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
};
