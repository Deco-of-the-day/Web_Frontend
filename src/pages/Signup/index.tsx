import React, { useState, ChangeEvent } from 'react';

import Input from '../../components/Input';

// type 어디다가 두고 관리할지 논의하기
// 근데 type이랑 interface 차이는?
type UserInfo = {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
};

const Signup = () => {
  const [userInfo, setUserInfo] = useState({} as UserInfo);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="signup-page">
      <div className="signup-info-wrapper">
        <div className="signup-info-box">
          <label>이메일</label>
          <Input
            name="email"
            value={userInfo.email}
            handleChange={(evt) => handleInputChange(evt)}
          />
        </div>
        <div className="signup-info-box">
          <label>비밀번호</label>
          <Input
            name="password"
            value={userInfo.password}
            type="password"
            handleChange={handleInputChange}
          />
        </div>
        <div className="signup-info-box">
          <label>비밀번호 확인</label>
          <Input
            name="passwordCheck"
            value={userInfo.passwordCheck}
            type="password"
            handleChange={handleInputChange}
          />
        </div>
        <div className="signup-info-box">
          <label>닉네임</label>
          <Input
            name="nickname"
            value={userInfo.nickname}
            handleChange={handleInputChange}
          />
        </div>
      </div>
      <div className="signup-button-wrapper">
        <button type="button">회원가입하기</button>
      </div>
    </div>
  );
};
export default Signup;
