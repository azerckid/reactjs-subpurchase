import React, { useState } from "react";
// eslint-disable-next-line
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 912px) {
    color: red;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
  }
`;
const LoginTitle = styled.div``;
const LoginForm = styled.form`
  width: 300px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginInput = styled.input`
  width: 250px;
  height: 30px;
  margin: 4px 0;
`;

function Login() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <LoginContainer>
      <LoginTitle>로그인</LoginTitle>
      <LoginForm action="POST">
        <LoginInput
          name=""
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={(e) => {
            setID(e.target.value);
            console.log(ID);
          }}
        />
        <LoginInput
          name=""
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {
            setPW(e.target.value);
            console.log(PW);
          }}
        />
        <LoginInput
          name=""
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(Email);
          }}
        />
        <LoginInput type="submit" value="로그인" />
      </LoginForm>
      <Link to={"/signup"}>회원가입</Link>
    </LoginContainer>
  );
}

export default Login;
