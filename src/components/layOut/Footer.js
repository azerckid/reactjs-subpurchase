import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #343434;
  color: #fff;
`;
const FooterInfo = styled.div`
  width: 1024px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 360px) {
    color: red;
    width: 100vw;
  }
`;
const CompanyInfo = styled.div`
  width: 1024px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 912px) {
    color: red;
    width: 100vw;
    flex-direction: column;
  }
`;
const CompanyInfoItem = styled.div`
  width: 500px;
  height: 300px;
  @media screen and (max-width: 9120px) {
    color: red;
    width: 100vw;
    flex-direction: column;
  }
`;
const Disclaimer = styled.div`
  width: 1024px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 9120px) {
    color: red;
    width: 100vw;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterInfo>
        <CompanyInfo>
          <CompanyInfoItem>center info</CompanyInfoItem>
          <CompanyInfoItem>account info</CompanyInfoItem>
        </CompanyInfo>
        <Disclaimer>disclaimer</Disclaimer>
      </FooterInfo>
    </FooterContainer>
  );
}

export default Footer;
