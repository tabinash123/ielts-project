import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaUserGraduate, FaGraduationCap, FaGlobeAmericas, FaHeart } from 'react-icons/fa';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const Container = styled.div`
  background-color: #fce4ec;
  padding: 20px 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
    font-family: Arial, sans-serif;

  ${media.tablet`
    padding: 30px 20px;
  `}

  ${media.laptop`
    padding: 40px 20px;
  `}
`;

const CloudBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const Cloud = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  animation: ${floatAnimation} 10s ease-in-out infinite;
  
  &::before, &::after {
    content: '';
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
  }

  &.cloud1 {
    width: 100px;
    height: 30px;
    top: 5%;
    left: 5%;
    
    &::before {
      width: 50px;
      height: 50px;
      top: -25px;
      left: 5px;
    }
    
    &::after {
      width: 60px;
      height: 60px;
      top: -35px;
      right: 5px;
    }

    ${media.tablet`
      width: 150px;
      height: 45px;
      
      &::before {
        width: 75px;
        height: 75px;
        top: -37px;
        left: 7px;
      }
      
      &::after {
        width: 90px;
        height: 90px;
        top: -52px;
        right: 7px;
      }
    `}

    ${media.laptop`
      width: 200px;
      height: 60px;
      
      &::before {
        width: 100px;
        height: 100px;
        top: -50px;
        left: 10px;
      }
      
      &::after {
        width: 120px;
        height: 120px;
        top: -70px;
        right: 10px;
      }
    `}
  }

  &.cloud2 {
    width: 75px;
    height: 22px;
    top: 15%;
    right: 10%;
    animation-delay: -3s;
    
    &::before {
      width: 37px;
      height: 37px;
      top: -18px;
      left: 3px;
    }
    
    &::after {
      width: 45px;
      height: 45px;
      top: -26px;
      right: 3px;
    }

    ${media.tablet`
      width: 112px;
      height: 33px;
      
      &::before {
        width: 56px;
        height: 56px;
        top: -28px;
        left: 5px;
      }
      
      &::after {
        width: 67px;
        height: 67px;
        top: -39px;
        right: 5px;
      }
    `}

    ${media.laptop`
      width: 150px;
      height: 45px;
      
      &::before {
        width: 75px;
        height: 75px;
        top: -37px;
        left: 7px;
      }
      
      &::after {
        width: 90px;
        height: 90px;
        top: -52px;
        right: 7px;
      }
    `}
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #00bcd4;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 5px;

  ${media.tablet`
    font-size: 28px;
    margin-bottom: 7px;
  `}

  ${media.laptop`
    font-size: 32px;
    margin-bottom: 10px;
  `}

  ${media.desktop`
    font-size: 36px;
  `}
`;

const Subtitle = styled.p`
  color: #00bcd4;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;

  ${media.tablet`
    font-size: 16px;
    margin-bottom: 30px;
  `}

  ${media.laptop`
    font-size: 18px;
    margin-bottom: 40px;
  `}
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  margin-bottom: 20px;

  ${media.tablet`
    width: 45%;
  `}

  ${media.laptop`
    width: 22%;
  `}
`;

const IconCircle = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  ${media.tablet`
    width: 60px;
    height: 60px;
  `}

  ${media.laptop`
    width: 70px;
    height: 70px;
  `}

  ${media.desktop`
    width: 80px;
    height: 80px;
  `}
`;

const FeatureText = styled.p`
  color: #e91e63;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  max-width: 120px;

  ${media.tablet`
    font-size: 13px;
    max-width: 130px;
  `}

  ${media.laptop`
    font-size: 14px;
    max-width: 140px;
  `}

  ${media.desktop`
    font-size: 16px;
    max-width: 150px;
  `}
`;

const HowAreWeDifferent = () => {
  return (
    <Container>
      <CloudBackground>
        <Cloud className="cloud1" />
        <Cloud className="cloud2" />
      </CloudBackground>
      <Content>
        <Title>How are we different?</Title>
        <Subtitle>Leader in Early Childhood Education</Subtitle>
        <FeaturesContainer>
          <Feature>
            <IconCircle color="#4caf50">
              <FaUserGraduate size={25} color="white" />
            </IconCircle>
            <FeatureText>Dedicated Professional Team</FeatureText>
          </Feature>
          <Feature>
            <IconCircle color="#2196f3">
              <FaGraduationCap size={25} color="white" />
            </IconCircle>
            <FeatureText>Best Appropriate Curriculum</FeatureText>
          </Feature>
          <Feature>
            <IconCircle color="#ff9800">
              <FaGlobeAmericas size={25} color="white" />
            </IconCircle>
            <FeatureText>Child Friendly Teaching Method</FeatureText>
          </Feature>
          <Feature>
            <IconCircle color="#f44336">
              <FaHeart size={25} color="white" />
            </IconCircle>
            <FeatureText>Safe and Stimulating Environment</FeatureText>
          </Feature>
        </FeaturesContainer>
      </Content>
    </Container>
  );
};

export default HowAreWeDifferent;