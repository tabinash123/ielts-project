import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BookOpen, Users, Smile } from 'lucide-react';
import img1 from "../../assets/parents/parent1.jpg";
import img2 from "../../assets/parents/parent2.jpg";
import img3 from "../../assets/parents/parent3.jpg";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
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

const HeadingSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 10px;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-rows: 300px 300px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    grid-template-rows: 250px 250px;
    height: 500px;
  }

  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentContainer = styled.div`
  z-index: 1;
  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const WelcomeText = styled.p`
  font-size: 1.2rem;
  color: #4CAF50;
  margin-bottom: 10px;
  font-weight: 600;
  animation: ${slideIn} 1s ease-out 0.3s both;
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
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;
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

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    gap: 30px;
  }

  animation: ${slideIn} 1s ease-out 0.9s both;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

const StatIcon = styled.div`
  margin-right: 10px;
  color: #FF6F00;
`;

const StatContent = styled.div`
  text-align: left;
`;

const StatNumber = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #424242;
`;

const StatText = styled.p`
  font-size: 0.9rem;
  color: #4A4A4A;
  margin: 0;
`;

const ExploreButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  animation: ${slideIn} 1s ease-out 1.2s both;
`;

const AboutUs = () => {
  return (
    <Container>
      <HeadingSection>
        <WelcomeText>Welcome To Sungava Balsansar</WelcomeText>
        <Title>Nurturing Young Minds for Over a Decade</Title>
      
      </HeadingSection>

      <ContentWrapper>
        <ContentContainer>
            <Description>
          At Sungava Balsansar Montessori School, we provide a nurturing environment where children can explore, learn, and grow at their own pace. 
          Our school, located in the heart of Kathmandu, offers a perfect blend of Montessori principles and modern educational practices.
        </Description>
          <Description>
            Our classrooms are carefully prepared environments, designed to foster independence, concentration, and a love for learning. 
            With materials that cater to various developmental stages, we ensure that each child receives a personalized learning experience.
          </Description>

          <StatsContainer>
            <StatItem>
              <StatIcon><BookOpen size={24} /></StatIcon>
              <StatContent>
                <StatNumber>15+</StatNumber>
                <StatText>Years of Excellence</StatText>
              </StatContent>
            </StatItem>
            <StatItem>
              <StatIcon><Users size={24} /></StatIcon>
              <StatContent>
                <StatNumber>20+</StatNumber>
                <StatText>Certified Teachers</StatText>
              </StatContent>
            </StatItem>
            <StatItem>
              <StatIcon><Smile size={24} /></StatIcon>
              <StatContent>
                <StatNumber>500+</StatNumber>
                <StatText>Happy Graduates</StatText>
              </StatContent>
            </StatItem>
          </StatsContainer>
          <ExploreButton>Schedule a Visit</ExploreButton>
        </ContentContainer>

        <ImageContainer>
          <LargeImage src={img1} alt="Montessori classroom" />
          <SmallImage src={img2} alt="Children's activities" />
          <SmallImage src={img3} alt="Outdoor learning space" />
        </ImageContainer>
      </ContentWrapper>
    </Container>
  );
};

export default AboutUs;