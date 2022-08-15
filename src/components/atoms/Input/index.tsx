import React, { ChangeEvent } from 'react';

interface InputProps {
  value?: string;
  placeHolder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({ value, placeHolder, handleChange }) => {
  return (
    <input
      value={value}
      placeholder={placeHolder}
      onChange={handleChange}
    ></input>
  );
};
export default Input;
