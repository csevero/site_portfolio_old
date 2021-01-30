import React, { InputHTMLAttributes } from "react";

import './input.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{

}

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;