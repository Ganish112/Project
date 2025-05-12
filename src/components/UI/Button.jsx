import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  fullWidth = false,
  icon
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-obsidium-500 focus:ring-offset-2';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const variantStyles = {
    primary: 'bg-obsidium-600 hover:bg-obsidium-700 text-white shadow-lg hover:shadow-obsidium-500/25',
    secondary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-lg hover:shadow-teal-500/25',
    outline:
      'bg-transparent border-2 border-obsidium-600 text-obsidium-600 hover:bg-obsidium-50 dark:hover:bg-obsidium-900/20',
    ghost:
      'bg-transparent hover:bg-obsidium-50 dark:hover:bg-obsidium-900/20 text-obsidium-700 dark:text-white'
  };

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const widthStyles = fullWidth ? 'w-full' : '';

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${widthStyles} ${className}`;

  const iconSpacing = icon ? 'space-x-2' : '';

  if (to) {
    return (
      <Link to={to} className={styles}>
        <span className={`inline-flex items-center ${iconSpacing}`}>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        <span className={`inline-flex items-center ${iconSpacing}`}>
          {icon && <span>{icon}</span>}
          <span>{children}</span>
        </span>
      </a>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick} disabled={disabled}>
      <span className={`inline-flex items-center ${iconSpacing}`}>
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </span>
    </button>
  );
};

export default Button;