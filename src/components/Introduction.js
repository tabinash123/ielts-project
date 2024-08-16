import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Book, Heart, Sun } from 'lucide-react';

import schoolExterior from '../assets/gallary/11.jpg';

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
  margin: 0 auto;
  gap: 3rem;
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
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%23FF9800" opacity="0.1"/></svg>') repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 1;
  width: 100%;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ContentArea = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #FF6F00;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }

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
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #4CAF50;
  margin-bottom: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }

  animation: ${slideIn} 1s ease-out 0.3s both;
`;

const Description = styled.p`
  color: #4A4A4A;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  animation: ${slideIn} 1s ease-out 0.6s both;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

  @media (min-width: 1024px) {
    flex: 1;
    height: 400px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: -10px;
    bottom: -10px;
    border: 4px solid #FF9800;
    border-radius: 20px;
    z-index: 1;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  border-radius: 15px;

  &:hover {
    transform: scale(1.05);
  }
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #4A4A4A;

  svg {
    margin-right: 10px;
    color: #FF6F00;
  }

  animation: ${slideIn} 1s ease-out 0.9s both;
`;

const MontessoriIntroComponent = () => (
  <IntroSection>
    <ContentWrapper>
      <ContentArea>
        <Title>Sungava Balsansar Montessori School</Title>
        <Subtitle>Where Little Minds Bloom and Grow!</Subtitle>
        
        <Description>
          Welcome to Sungava Balsansar Montessori Preschool in Tandi, Chitwan! Our colorful world is designed for curious explorers aged 2 to 5.5 years. Here, we nurture your child's natural love for learning through fun, hands-on activities and gentle guidance from our caring teachers.
        </Description>
        <Description>
          At Sungava Balsansar, we believe in the magic of childhood. Our playful environment encourages creativity, builds confidence, and helps your little one make new friends. We focus on developing important skills through games, stories, and exciting discoveries, setting the stage for a lifetime of joyful learning.
        </Description>

        <FeatureList>
          <FeatureItem>
            <Book size={24} />
            Engaging Montessori curriculum
          </FeatureItem>
          <FeatureItem>
            <Heart size={24} />
            Nurturing and supportive environment
          </FeatureItem>
          <FeatureItem>
            <Sun size={24} />
            Outdoor learning and play areas
          </FeatureItem>
        </FeatureList>
      </ContentArea>
      <ImageWrapper>
        <Image src={schoolExterior} alt="Sungava Balsansar Montessori School exterior" />
      </ImageWrapper>
    </ContentWrapper>
  </IntroSection>
);

export default MontessoriIntroComponent;