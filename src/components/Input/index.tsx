import React, { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  type?: string;
  placeHolder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  value,
  type,
  placeHolder,
  handleChange,
}) => {
  return (
    <input
      value={value}
      type={type}
      placeholder={placeHolder}
      onChange={handleChange}
    ></input>
  );
};
export default Input;
