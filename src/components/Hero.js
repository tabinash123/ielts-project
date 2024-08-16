import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Calendar, Users, Award, Smile } from 'lucide-react';
import backgroundImage from '../assets/gallary/12.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url('${backgroundImage}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;

`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  // margin: 0 auto;
  margin-left: 20px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;  // Increased from 2rem
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #FF6F00;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;  // Increased from 1rem
  margin-bottom: 30px;
  opacity: 0.9;
  color: #4CAF50;
  font-weight: 600;
  animation: ${slideIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Highlight = styled.span`
  color: #FFA000;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;  // Increased from 10px
  margin-bottom: 40px;
  animation: ${slideIn} 1s ease-out 0.6s both;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const Button = styled.button`
  padding: 15px 30px;  // Increased padding
  font-size: 1.1rem;  // Increased from 1rem
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  max-width: 70%;

  &:first-child {
    background-color: #FF6F00;
    color: white;

    &:hover {
      background-color: #FF9800;
      transform: translateY(-2px);
    }
  }

  &:last-child {
    background-color: transparent;
    border: 2px solid #4CAF50;
    color: #4CAF50;

    &:hover {
      background-color: rgba(76, 175, 80, 0.1);
      transform: translateY(-2px);
    }
  }

  @media (min-width: 768px) {
    width: auto;
    font-size: 1rem;
    padding: 12px 24px;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  animation: ${slideIn} 1s ease-out 0.9s both;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;  // Increased from 1.2rem
  font-weight: bold;
  margin-bottom: 5px;
  color: #FFA000;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

const StatLabel = styled.div`
  font-size: 1rem;  // Increased from 0.8rem
  opacity: 0.8;
  color: #4CAF50;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <Title>Welcome to <Highlight>Sungava Balsansar</Highlight> Montessori School</Title>
        <Subtitle>Where Little Minds Bloom and Grow!</Subtitle>
        <ButtonGroup>
          <Button>Schedule A Visit</Button>
          <Button>Explore Our World</Button>
        </ButtonGroup>
        <Stats>
          <StatItem>
            <StatValue>10+</StatValue>
            <StatLabel>Years of Joy</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>500+</StatValue>
            <StatLabel>Happy Children</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>20+</StatValue>
            <StatLabel>Caring Teachers</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Fun Learning</StatLabel>
          </StatItem>
        </Stats>
      </Content>
    </HeroSection>
  );
};

export default Hero;