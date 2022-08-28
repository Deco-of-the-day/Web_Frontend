import React, { useState, ChangeEvent } from 'react';

import Input from '../../components/Input';

const Signup = () => {
  const [email, setEmail] = useState('' as string);
  const [password, setPassword] = useState('' as string);
  const [passwordCheck, setPasswordCheck] = useState('' as string);
  const [nickname, setNickname] = useState('' as string);

  return (
    <>
      <div className="signup-page">
        <div className="signup-info-wrapper">
          <div className="signup-info-box">
            <label>이메일</label>
            <Input
              value={email}
              handleChange={({ target }: ChangeEvent) => {
                setEmail((target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="signup-info-box">
            <label>비밀번호</label>
            <Input
              value={password}
              type="password"
              handleChange={({ target }: ChangeEvent) => {
                setPassword((target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="signup-info-box">
            <label>비밀번호 확인</label>
            <Input
              value={passwordCheck}
              type="password"
              handleChange={({ target }: ChangeEvent) => {
                setPasswordCheck((target as HTMLInputElement).value);
              }}
            />
          </div>
          <div className="signup-info-box">
            <label>닉네임</label>
            <Input
              value={nickname}
              handleChange={({ target }: ChangeEvent) => {
                setNickname((target as HTMLInputElement).value);
              }}
            />
          </div>
        </div>
        <div className="signup-button-wrapper">
          <button>회원가입하기</button>
        </div>
      </div>
    </>
  );
};
export default Signup;
