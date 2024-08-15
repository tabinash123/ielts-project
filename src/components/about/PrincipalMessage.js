import React from 'react';
import styled from 'styled-components';
import { BookOpen, Users, Smile } from 'lucide-react';
import img1 from "../../assets/parents/parent1.jpg";
import img2 from "../../assets/parents/parent2.jpg";
import img3 from "../../assets/parents/parent3.jpg";

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 20px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #FFF9C4;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 40px;
    padding: 80px 40px;
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
    order: -1;
  }
`;

const LargeImage = styled.img`
  grid-row: span 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ContentContainer = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`;

const WelcomeText = styled.p`
  font-size: 0.9rem;
  color: #FF9800;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h2`
  color: #424242;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FF9800, transparent);
  }
`;

const Description = styled.p`
  color: #616161;
  font-size: 0.9rem;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
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
  color: #FF9800;
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
  color: #616161;
  margin: 0;
`;

const ExploreButton = styled.button`
  background-color: #FF9800;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;

  &:hover {
    background-color: #F57C00;
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