import React from 'react';
import styled from 'styled-components';
import { BookOpen, Users, Smile } from 'lucide-react';
import img1 from "../../assets/parents/parent1.jpg";
import img2 from "../../assets/parents/parent2.jpg";
import img3 from "../../assets/parents/parent3.jpg";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f2e6fe;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
    padding: 40px 20px;
  }
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 10px;
  margin-top: 20px;

  @media (min-width: 768px) {
    grid-template-rows: 300px 300px;
    margin-top: 30px;
  }

  @media (min-width: 1024px) {
    flex: 1;
    grid-template-rows: 250px 250px;
    height: 500px;
    margin-top: 0;
    order: -1; // Move back to the left on desktop
  }
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const WelcomeText = styled.p`
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #616161;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    gap: 30px;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
`;

const StatIcon = styled.div`
  margin-right: 10px;
  color: #4FB3FF;
`;

const StatContent = styled.div`
  text-align: left;
`;

const StatNumber = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  color: #424242;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const StatText = styled.p`
  font-size: 14px;
  color: #616161;
  margin: 0;
`;

const ExploreButton = styled.button`
  background-color: #4FB3FF;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #3d8cbf;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const AboutUs = () => {
  return (
    <Container>
      <ContentContainer>
        <WelcomeText>Welcome To Sungava Balsansar</WelcomeText>
        <Title>Nurturing Young Minds for Over a Decade</Title>
        <Description>
          At Sungava Balsansar Montessori School, we provide a nurturing environment where children can explore, learn, and grow at their own pace. 
          Our school, located in the heart of Kathmandu, offers a perfect blend of Montessori principles and modern educational practices.
        </Description>
        <Description>
          Our classrooms are carefully prepared environments, designed to foster independence, concentration, and a love for learning. 
          With materials that cater to various developmental stages, we ensure that each child receives a personalized learning experience.
        </Description>
        <Description>
          We believe in holistic development, focusing not just on academic skills, but also on social, emotional, and physical growth. 
          Our dedicated teachers guide children to become confident, compassionate, and curious individuals ready to take on the world.
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
            </StatContent >
          </StatItem>
        </StatsContainer>
        <ExploreButton>Schedule a Visit</ExploreButton>
      </ContentContainer>
      <ImageContainer>
        <LargeImage src={img1} alt="Montessori classroom" />
        <SmallImage src={img2} alt="Children's activities" />
        <SmallImage src={img3} alt="Outdoor learning space" />
      </ImageContainer>
    </Container>
  );
};

export default AboutUs;