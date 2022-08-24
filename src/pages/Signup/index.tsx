import React, { useState, ChangeEventHandler } from 'react';

import Input from '../../components/Input';

const Signup = () => {
  const [inputValue, setInputValue] = useState('' as string);

  const handleInputValue: Function = (e: Event) => {
    setInputValue((e.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className='signup-page'>
        <div className='signup-info-wrapper'>
          <div className='signup-info-box'>
            <label>이메일</label>
            <Input handleChange={handleInputValue as ChangeEventHandler} />
          </div>
          <div className='signup-info-box'>
            <label>비밀번호</label>
            <Input handleChange={handleInputValue as ChangeEventHandler} />
          </div>
          <div className='signup-info-box'>
            <label>비밀번호 확인</label>
            <Input handleChange={handleInputValue as ChangeEventHandler} />
          </div>
          <div className='signup-info-box'>
            <label>닉네임</label>
            <Input handleChange={handleInputValue as ChangeEventHandler} />
          </div>
        </div>
        <div className='signup-button-wrapper'>
          <button>회원가입하기</button>
        </div>
      </div>
    </>
  );
};
export default Signup;
