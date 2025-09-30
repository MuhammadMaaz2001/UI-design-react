import React from 'react';

const ChipView = ({
  text,
  icon,
  size = 'medium',
  variant = 'filled',
  selected = false,
  disabled = false,
  removable = false,
  onClick,
  onRemove,
  className = '',
  layout_width,
  position,
  children,
  ...props
}) => {
  // Define size classes
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };

  // Define variant classes
  const variantClasses = {
    filled: 'bg-white text-red-500',
    outline: 'border-2 border-white- text-blue-500 bg-transparent',
    soft: 'bg-blue-500 bg-opacity-10 text-blue-500',
  };

  // Optional styles
  const optionalClasses = [
    layout_width ? `w-[${layout_width}]` : '',
    position ? position : '',
    selected ? 'ring-2 ring-blue-500' : '',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      onClick={(e) => !disabled && onClick?.(e)}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${optionalClasses} ${className}`}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={selected}
      aria-disabled={disabled}
      {...props}
    >
      {icon && <span className="mr-1 flex-shrink-0">{icon}</span>}
      <span className="truncate">{children || text}</span>

      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.(e);
          }}
          className="ml-1 flex-shrink-0 hover:bg-black hover:bg-opacity-20 rounded-full p-0.5 transition-colors"
          aria-label="Remove"
          tabIndex={-1}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default ChipView;
