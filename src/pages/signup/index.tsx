import React, { useState, ChangeEventHandler } from 'react';

import Input from '../../components/atoms/Input';

const Signup = () => {
  const [inputValue, setInputValue] = useState('' as string);

  const handleInputValue: Function = (e: Event) => {
    setInputValue((e.target as HTMLInputElement).value);
  };
  return (
    <>
      <Input handleChange={handleInputValue as ChangeEventHandler} />
      <div>{inputValue}</div>
    </>
  );
};
export default Signup;
