import React from "react";
import styled from "styled-components";
import Swiper from "../components/swiper/Swiper";

const HomeContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HomeBoxContainer = styled.div`
  width: 100vw;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: yellowgreen; */
`;
const HomeBox = styled.div`
  width: 1024px;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  /* background-color: yellowgreen; */
  @media screen and (max-width: 912px) {
    color: red;
    width: 100vw;
    flex-direction: column;
  }
`;
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 26px;
`;
const ServiceBox = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 912px) {
    color: red;
    width: 100vw;
    flex-direction: column;
  }
`;
const ServiceBoxItem = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: pink;
  @media screen and (max-width: 912px) {
    width: 100vw;
    margin: 10px 10px;
    color: red;
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Swiper></Swiper>
      <HomeBoxContainer>
        <HomeBox>
          <Title>our service</Title>
          <ServiceBox>
            <ServiceBoxItem width={330} height={330}>
              service1
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service2
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service3
            </ServiceBoxItem>
          </ServiceBox>
        </HomeBox>
        <HomeBox>
          <Title>best shop</Title>
          <ServiceBox>
            <ServiceBoxItem width={330} height={330}>
              service1
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service2
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service3
            </ServiceBoxItem>
          </ServiceBox>
        </HomeBox>
        <HomeBox>
          <Title>infomation</Title>
          <ServiceBox>
            <ServiceBoxItem width={330} height={330}>
              service1
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service2
            </ServiceBoxItem>
            <ServiceBoxItem width={330} height={330}>
              service3
            </ServiceBoxItem>
          </ServiceBox>
        </HomeBox>
        <HomeBox>
          <Title>now</Title>
          <ServiceBox>
            <ServiceBoxItem width={500} height={500}>
              service1
            </ServiceBoxItem>
            <ServiceBoxItem width={500} height={500}>
              service2
            </ServiceBoxItem>
          </ServiceBox>
        </HomeBox>
      </HomeBoxContainer>
    </HomeContainer>
  );
};

export default Home;
