// components/common/ReadMoreButton.jsx
import React from 'react';
import { Link } from 'react-router';

const ReadMoreButton = ({ 
  to, 
  onClick,
  children = "Read more",
  variant = "primary",
  size = "md",
  showIcon = true,
  className = "",
  ...props 
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center font-medium transition-all duration-200 group";
  
  // Variants
  const variants = {
    primary: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300",
    secondary: "text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
    white: "text-white hover:text-gray-200",
    black: "text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300",
    gradient: "text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text hover:from-blue-700 hover:to-purple-700"
  };
  
  // Sizes
  const sizes = {
    sm: "text-sm",
    md: "text-sm",
    lg: "text-base",
    xl: "text-lg"
  };
  
  // Icon sizes
  const iconSizes = {
    sm: "w-3 h-3 ml-1",
    md: "w-4 h-4 ml-2",
    lg: "w-5 h-5 ml-2",
    xl: "w-6 h-6 ml-2"
  };

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  const iconClasses = `
    transition-transform duration-200 group-hover:translate-x-1
    ${iconSizes[size]}
  `;

  const icon = (
    <svg
      className={iconClasses}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  // If 'to' prop is provided, render as Link
  if (to) {
    return (
      <Link
        to={to}
        className={buttonClasses}
        {...props}
      >
        {children}
        {showIcon && icon}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      type="button"
      {...props}
    >
      {children}
      {showIcon && icon}
    </button>
  );
};

export default ReadMoreButton;