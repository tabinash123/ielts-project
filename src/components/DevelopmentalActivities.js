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
  max-width: 1200px;
  // margin: 100px auto;
  padding: 20px;
    background-color: #f2e6fe;

  
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const RedLine = styled.div`
  width: 40px;
  height: 2px;
  background-color: #e57373;
  margin-right: 15px;
`;

const Title = styled.h2`
  font-size: 36px;
  margin: 0;
  font-weight: 700;
`;

const TitleNumber = styled.span`
  color: #e57373;
  font-weight: 300;
  margin-right: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Description = styled.p`
  color: #666;
  margin: auto auto;
  line-height: 1.6;
  grid-column: span 2;
  @media (max-width: 768px) {
    grid-column: span 2;
    overflow: hidden;
    text-overflow: ellipsis;
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
  font-size: 14px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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
        {services.slice(0, 1).map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImage src={service.image} alt={service.name} />
            <ServiceLabel>{service.name}</ServiceLabel>
          </ServiceItem>
        ))}
        {services.slice(1).map((service, index) => (
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