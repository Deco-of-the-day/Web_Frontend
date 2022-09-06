import React, { useState, ChangeEvent } from 'react';

import { isEmail, isPassword, isNickname, isSameStr } from '../../utils/shared';

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
  const [checkEmailFormat, setCheckEmailFormat] = useState(false as boolean);
  const [checkPasswordFormat, setCheckPasswordFormat] = useState(
    false as boolean
  );
  const [checkNicknameFormat, setCheckNicknameFormat] = useState(
    false as boolean
  );

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitUserInfo = () => {
    console.log(
      checkEmailFormat,
      checkPasswordFormat,
      checkNicknameFormat,
      isSameStr(userInfo.password, userInfo.passwordCheck)
    );

    if (
      checkEmailFormat &&
      checkPasswordFormat &&
      checkNicknameFormat &&
      isSameStr(userInfo.password, userInfo.passwordCheck)
    ) {
      // submit
    } else {
      // 기입 정보 재확인
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-info-wrapper">
        <div className="signup-info-box">
          <label>이메일</label>
          <Input
            name="email"
            value={userInfo.email}
            handleChange={(e) => {
              if (isEmail(e.target.value)) {
                setCheckEmailFormat(true);
              } else {
                setCheckEmailFormat(false);
              }
              handleInputChange(e);
            }}
          />
        </div>
        <div className="signup-info-box">
          <label>비밀번호</label>
          <Input
            name="password"
            value={userInfo.password}
            type="password"
            handleChange={(e) => {
              if (isPassword(e.target.value)) {
                setCheckPasswordFormat(true);
              } else {
                setCheckPasswordFormat(false);
              }
              handleInputChange(e);
            }}
          />
        </div>
        <div className="signup-info-box">
          <label>비밀번호 확인</label>
          <Input
            name="passwordCheck"
            value={userInfo.passwordCheck}
            type="password"
            handleChange={(e) => {
              handleInputChange(e);
            }}
          />
        </div>
        <div className="signup-info-box">
          <label>닉네임</label>
          <Input
            name="nickname"
            value={userInfo.nickname}
            handleChange={(e) => {
              if (isNickname(e.target.value)) {
                setCheckNicknameFormat(true);
              } else {
                setCheckNicknameFormat(false);
              }
              handleInputChange(e);
            }}
          />
        </div>
      </div>
      <div className="signup-button-wrapper">
        <button type="button" onClick={submitUserInfo}>
          회원가입하기
        </button>
      </div>
    </div>
  );
};
export default Signup;
