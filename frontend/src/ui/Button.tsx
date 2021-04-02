import React, { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

const colorClassnames = {
  primary: '',
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
      className={`${colorClassnames[color]}`}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};
