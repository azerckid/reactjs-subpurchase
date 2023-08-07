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
`;
const CompanyInfo = styled.div`
  width: 1024px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const CompanyInfoItem = styled.div`
  width: 500px;
  height: 300px;
`;
const Disclaimer = styled.div`
  width: 1024px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
