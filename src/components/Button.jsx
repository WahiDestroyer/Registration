// components/common/Button.jsx
import React from 'react';

const button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  href, 
  to,
  target, 
  ...props
}) => {

  const baseClasses = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white text-blue-600 hover:bg-gray-100 focus:ring-blue-500',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-blue-600 focus:ring-white',
    outlineDark: 'border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white focus:ring-gray-800',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
  };
  

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };
  
 
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${className}
  `.trim();

 
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }


  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;