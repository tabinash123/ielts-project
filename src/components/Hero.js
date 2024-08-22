import React from 'react';
import styled from 'styled-components';
import { Calendar, Users, Award, Smile } from 'lucide-react';
import imag from '../assets/hero.jpg'

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;
  background-image: url('${imag}');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  // padding: 0 5%;
  
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
  max-width: 50%;
  margin-left:5%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
   @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 30px;
  opacity: 0.9;
`;

const Highlight = styled.span`
  color: #FF6F00;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:first-child {
    background-color: #ff6b6b;
    color: white;

    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
    }
  }

  &:last-child {
    background-color: transparent;
    border: 2px solid white;
    color: white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      transform: translateY(-2px);
    }
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <Title>Welcome to <Highlight>Sungava Balsansar Montessori 
</Highlight></Title>
        <Subtitle>Where Little Minds Bloom and Grow!</Subtitle>
        
        <Stats>
          <StatItem>
            <StatValue>10+</StatValue>
            <StatLabel>Years of Excellence</StatLabel>
          </StatItem>
        
        
          <StatItem>
            <StatValue>20+</StatValue>
            <StatLabel>Staff Members</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>100%</StatValue>
            <StatLabel>Safety Record</StatLabel>
          </StatItem>
        </Stats>
      </Content>
    </HeroSection>
  );
};

export default Hero;