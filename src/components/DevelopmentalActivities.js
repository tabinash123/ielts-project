import React from 'react';
import styled, { keyframes } from 'styled-components';
import art from '../assets/activities/art.jpg';
import cowork from '../assets/activities/cowork.jpg';
import creativity from '../assets/activities/creativity.jpg';
import hands from '../assets/activities/hands.jpg';
import meal from '../assets/activities/meal.jpg';
import socialActivity from '../assets/activities/social activity.jpg';
import yoga from '../assets/activities/yoga.jpg';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ServicesSection = styled.section`

  padding: 40px 20px;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 1024px) {
    padding: 60px 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    z-index: 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

const RedLine = styled.div`
  width: 30px;
  height: 3px;
  background-color: #FF6F00;
  margin-right: 10px;

  @media (min-width: 768px) {
    width: 40px;
    margin-right: 15px;
  }
`;

const Title = styled.h2`
  color: #FF6F00;
  font-size: 1.8rem;
  margin: 0;
  font-weight: 700;
  padding-bottom: 0.5rem;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;

    @media (min-width: 768px) {
      width: 100px;
      height: 4px;
    }
  }

  animation: ${fadeIn} 1s ease-out;
`;

const TitleNumber = styled.span`
  color: #FFA000;
  font-weight: 300;
  margin-right: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;

const Description = styled.p`
  color: #4A4A4A;
  font-size: 1rem;
  line-height: 1.5;
  grid-column: 1 / -1;
  margin: 0 auto 1.5rem;
  max-width: 800px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  animation: ${slideIn} 1s ease-out 0.3s both;
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 768px) {
    height: 180px;
  }

  @media (min-width: 1024px) {
    height: 200px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
  }

  animation: ${fadeIn} 1s ease-out ${props => 0.3 + props.index * 0.1}s both;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ServiceItem}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 8px;
  font-weight: bold;
  color: #FF6F00;
  font-size: 0.9rem;
  text-align: center;
  transition: background-color 0.3s ease;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }

  ${ServiceItem}:hover & {
    background-color: rgba(255, 111, 0, 0.9);
    color: white;
  }
`;

const services = [
  { name: 'Circle Time', image: cowork },
  { name: 'Hands-on Activities', image: hands },
  { name: 'Art Activities', image: art },
  { name: 'Story Time', image: creativity },
  { name: 'Yoga & Meditation', image: yoga },
  { name: 'Social Activity', image: socialActivity },
  { name: 'Collaborative Work', image: cowork },
  { name: 'Meal Time', image: meal },
];

const DevelopmentalActivities = () => {
  return (
    <ServicesSection>
      <SectionHeader>
        <RedLine />
        <Title>
          Developmental Activities
        </Title>
      </SectionHeader>
      <GridContainer>
        <Description>
          Our learning zones blend structured and unstructured play, encouraging children to think creatively and explore their world through engaging activities.
        </Description>
        {services.map((service, index) => (
          <ServiceItem key={index} index={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
      </GridContainer>
    </ServicesSection>
  );
};

export default DevelopmentalActivities;