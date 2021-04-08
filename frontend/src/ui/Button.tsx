import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

const colorClassnames = {
  primary:
    'bg-blue-700 text-button bg-accent hover:bg-accent-hover disabled:text-accent-disabled disabled:bg-accent-hover',
  secondary:
    'text-button bg-primary-700 hover:bg-primary-600 disabled:text-primary-500 disabled:bg-primary-600',
};

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof typeof colorClassnames;
  loading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  color = 'primary',
  disabled,
  loading,
  className = '',
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={`${colorClassnames[color]} font-bold flex items-center justify-center py-2 px-6 text-sm rounded-md transition duration-250 ease-in-out ${className}`}
      {...props}
    >
      <span className={loading ? 'opacity-0' : 'flex items-center'}>
        {children}
      </span>
    </button>
  );
};
