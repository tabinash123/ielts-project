import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Book, Heart, Sun } from 'lucide-react';

import schoolExterior from '../assets/gallary/11.jpg'; // You'll need to add this image

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0rem auto;
  gap: 3rem;
  background-color: #f2e6fe;
  color: #4A4A4A;
  position: relative;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 6rem 4rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%234CAF50" opacity="0.05"/></svg>') repeat;
    opacity: 0.05;
    z-index: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media (min-width: 1024px) {
    gap: 60px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #4CAF50, transparent);
  }

  animation: ${fadeIn} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.1rem;
  color: #FFA000;
  margin-bottom: 1rem;
  font-weight: 600;

  animation: ${slideIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1rem;

  animation: ${slideIn} 1s ease-out 0.6s both;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  animation: ${fadeIn} 1s ease-out 1s both;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  color: #4A4A4A;
  font-weight: 600;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

const StatLabel = styled.div`
  color: #4CAF50;
  font-size: 0.9rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid #4CAF50;
    z-index: 1;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (min-width: 768px) {
    height: 100%;
    min-height: 400px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;

const MontessoriIntroComponent = () => (
  <IntroSection>
    <Grid>
      <ContentArea>
        <Title>Angel's Kingdom</Title>
        <Subtitle>Where Learning Blossoms</Subtitle>
        
        <Description>
          Angel's Kingdom Kindergarten is a Montessori preschool in Lazimpat, Kathmandu offering progressive and child-centered education to children ages 2 years to 5.5 years old. We foster a nurturing environment where every child's unique potential can flourish.
        </Description>
        <StatsGrid>
          <StatItem>
            <StatNumber>15+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1:10</StatNumber>
            <StatLabel>Teacher-Student Ratio</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>100%</StatNumber>
            <StatLabel>Montessori Certified</StatLabel>
          </StatItem>
        </StatsGrid>
      </ContentArea>
      <ImageWrapper>
        <Image src={schoolExterior} alt="Angel's Kingdom Kindergarten exterior" />
      </ImageWrapper>
    </Grid>
  </IntroSection>
);

export default MontessoriIntroComponent;