import React, { useState, ChangeEvent } from 'react';

import api from '../../api/api';
import { isEmail, isPassword, isNickname, isSameStr } from '../../utils/shared';

import Input from '../../components/Input';

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
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(true as boolean);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const submitUserInfo = async () => {
    if (
      checkEmailFormat &&
      checkPasswordFormat &&
      checkNicknameFormat &&
      isSameStr(userInfo.password, userInfo.passwordCheck) &&
      !isDuplicatedEmail
    ) {
      // submit
      const params = {
        email: userInfo.email,
        password: userInfo.password,
        nickname: userInfo.nickname,
      };

      const { status } = await api.post(`/user`, params);
      if (status === 200) {
        // 회원가입 성공
      } else {
        // 회원가입 실패
      }
    } else {
      // 기입 정보 재확인
    }
  };

  const findUserInfo = async () => {
    const { status } = await api.get(`/user/${userInfo.email}`, {});
    if (status === 200) {
      // 이미 있는 계정
      setIsDuplicatedEmail(true);
    } else {
      setIsDuplicatedEmail(false);
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
          <button type="button" onClick={findUserInfo}>
            중복확인
          </button>
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
