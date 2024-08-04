import React from 'react';
import styled from 'styled-components';
import About from '../assets/gallary/10.png';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    padding: 80px 40px;
  }

  @media (min-width: 1025px) {
    padding: 100px 60px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  font-weight: 700;

  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #f0a500;
    margin: 20px auto 0;
    border-radius: 2px;
  }

  @media (min-width: 769px) {
    font-size: 42px;
  }

  @media (min-width: 1025px) {
    font-size: 48px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    flex: 1;
    padding-right: 40px;
  }
`;

const Description = styled.p`
  color: #34495e;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 16px;

  @media (min-width: 769px) {
    font-size: 18px;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 32px;
  color: #f0a500;
  font-weight: 700;
  margin-bottom: 5px;

  @media (min-width: 769px) {
    font-size: 36px;
  }

  @media (min-width: 1025px) {
    font-size: 42px;
  }
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  @media (min-width: 769px) {
    font-size: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (min-width: 769px) {
    flex: none;
    width: 45%;
    height: 400px;
  }

  @media (min-width: 1025px) {
    width: 500px;
    height: 450px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutUs = () => (
  <AboutSection>
    <Title>Angel Montessori</Title>
    <ContentWrapper>
      <TextContent>
        <Description>
          At Angel Montessori, we provide a nurturing environment where children can explore, learn, and grow. Our dedicated team of educators is committed to fostering each child's unique potential through the Montessori method.
        </Description>
        <Description>
          We believe in hands-on learning experiences that encourage independence, creativity, and critical thinking. Our classrooms are carefully prepared to stimulate curiosity and promote self-directed learning, allowing children to develop at their own pace.
        </Description>
        <Stats>
          <StatItem>
            <StatNumber>25</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>500+</StatNumber>
            <StatLabel>Happy Students</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>30</StatNumber>
            <StatLabel>Certified Teachers</StatLabel>
          </StatItem>
        </Stats>
      </TextContent>
      <ImageWrapper>
        <Image src={About} alt="Children learning at Angel Montessori" />
      </ImageWrapper>
    </ContentWrapper>
  </AboutSection>
);

export default AboutUs;