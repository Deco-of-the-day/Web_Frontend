import React, { ChangeEvent } from 'react';

type InputProps = {
  name?: string;
  value?: string;
  type?: string;
  placeHolder?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  type,
  placeHolder,
  handleChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      type={type}
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};
export default Input;
