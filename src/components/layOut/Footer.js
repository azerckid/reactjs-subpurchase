import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
`;

function Footer() {
  return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
