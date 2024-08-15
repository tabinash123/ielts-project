import React from 'react';
import styled from 'styled-components';
import art from '../assets/activities/art.jpg';
import cowork from '../assets/activities/cowork.jpg';
import creativity from '../assets/activities/creativity.jpg';
import hands from '../assets/activities/hands.jpg';
import meal from '../assets/activities/meal.png';
import socialActivity from '../assets/activities/social activity.jpg';
import yoga from '../assets/activities/yoga.jpg';

const ServicesSection = styled.section`
  font-family: Arial, sans-serif;
  padding: 40px 20px;
  background-color: #FFF9C4;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const RedLine = styled.div`
  width: 40px;
  height: 3px;
  background-color: #FF9800;
  margin-right: 15px;
`;

const Title = styled.h2`
  color: #424242;
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  padding-bottom: 0.5rem;
  position: relative;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, #FF9800, transparent);
  }
`;

const TitleNumber = styled.span`
  color: #FFA000;
  font-weight: 300;
  margin-right: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Description = styled.p`
  color: #616161;
  font-size: 0.9rem;
  line-height: 1.5;
  grid-column: span 2;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    font-size: 0.95rem;
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    grid-column: span 3;
  }
`;

const ServiceItem = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ServiceLabel = styled.div`
  position: absolute;
  bottom: -10px;
  left: 10px;
  background-color: white;
  padding: 8px 15px;
  font-weight: bold;
  color: #424242;
  font-size: 0.85rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    font-size: 10px;
  }
`;

const services = [
  { name: 'CIRCLE TIME', image: cowork },
  { name: 'HANDS ON ACTIVITIES', image: hands },
  { name: 'ART ACTIVITIES', image: art },
  { name: 'STORY TIME', image: creativity },
  { name: 'Yoga & Meditation', image: yoga },
  { name: 'Social Activity', image: socialActivity },
  { name: 'Cowork', image: cowork },
  { name: 'MEAL TIME', image: meal },
  { name: 'Creativity', image: creativity },
];

const DevelopmentalActivities = () => {
  return (
    <ServicesSection>
      <SectionHeader>
        <RedLine />
        <Title>
          <TitleNumber>01</TitleNumber>
          DEVELOPMENTAL ACTIVITIES
        </Title>
      </SectionHeader>
      <GridContainer>
        <Description>
          Our learning zones have a mix of structured and unstructured play and include activities that
          encourage children to think outside the box.
        </Description>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
      </GridContainer>
    </ServicesSection>
  );
};

export default DevelopmentalActivities;