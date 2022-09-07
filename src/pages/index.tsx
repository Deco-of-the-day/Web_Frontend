import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Signin() {
  return (
    <div className="signin-page">
      <div className="signin-google-wrapper">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          shape="circle"
        />
      </div>
      <div className="signin-userinfo-wrapper">
        <div className="signin-userinfo-box">
          <input />
        </div>
        <div className="signin-userinfo-box">
          <input />
        </div>
      </div>
      <div className="signin-button-wrapper">
        <button type="button">로그인</button>
      </div>
    </div>
  );
}

export default Signin;
