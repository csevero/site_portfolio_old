import React, { ButtonHTMLAttributes } from "react";

import "./button.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
}

const Button: React.FC<IButtonProps> = ({
  backgroundColor,
  children,
  ...rest
}) => {
  return (
    <button
      style={{ backgroundColor: `${backgroundColor}` }}
      className='button'
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
