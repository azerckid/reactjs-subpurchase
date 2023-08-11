import React, { useState } from "react";
// eslint-disable-next-line
import axios from "axios";
import styled from "styled-components";

const SignUpContainer = styled.div`
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
const SignUpTitle = styled.div``;
const SignUpForm = styled.form`
  width: 300px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignUpInput = styled.input`
  width: 250px;
  height: 30px;
  margin: 4px 0;
`;

function SignUp() {
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [Email, setEmail] = useState("");

  return (
    <SignUpContainer>
      <SignUpTitle>로그인</SignUpTitle>
      <SignUpForm>
        <SignUpInput
          name=""
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={(e) => {
            setID(e.target.value);
            console.log(ID);
          }}
        />
        <SignUpInput
          name=""
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => {
            setPW(e.target.value);
            console.log(PW);
          }}
        />
        <SignUpInput
          name=""
          type="email"
          placeholder="이메일을 입력하세요"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(Email);
          }}
        />
        <SignUpInput type="submit" value="로그인" />
      </SignUpForm>
    </SignUpContainer>
  );
}

export default SignUp;
