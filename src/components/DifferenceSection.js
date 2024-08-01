import React from 'react';
import styled from 'styled-components';
import { Typography, Card } from 'antd';

import curriculum from '../assets/different/curriculum.png';
import safe from '../assets/different/safe.png';
import small from '../assets/different/small.png';
import teacher from '../assets/different/teacher.png';

const Section = styled.section`
  background-color: #FFF0F5;
  padding: 3rem 1rem;
  text-align: center;
  font-family: 'Arial', sans-serif;
  position: relative;
  overflow: hidden;
`;

const Title = styled(Typography.Title)`
  && {
    color: #00BFFF;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Subtitle = styled(Typography.Text)`
  && {
    color: #4169E1;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 2rem;
  }
`;

const CloudBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-image: url('/path-to-cloud-background.png');
  background-repeat: repeat-x;
  background-size: auto 100%;
  z-index: 1;
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const FeatureCard = styled(Card)`
  width: calc(50% - 1rem);
  margin: 0.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    width: calc(25% - 1rem);
  }

  .ant-card-body {
    padding: 1.5rem;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 0.5rem;
`;

const FeatureText = styled(Typography.Text)`
  && {
    color: #FF69B4;
    font-size: 0.9rem;
    display: block;
    margin-top: 0.5rem;
  }
`;

const DifferenceSection = () => (
  <Section>
    <Title level={1}>How are we different?</Title>
    <Subtitle>Leader in Early Childhood Education</Subtitle>
    <FeatureContainer>
      {[
        { icon: teacher, text: 'Dedicated Professional Team' },
        { icon: curriculum, text: 'Best Appropriate Curriculum' },
        { icon: small, text: 'Child Friendly Teaching Method' },
        { icon: safe, text: 'Safe and Stimulating Environment' },
      ].map((item, index) => (
        <FeatureCard key={index}>
          <Icon src={item.icon} alt={item.text} />
          <FeatureText>{item.text}</FeatureText>
        </FeatureCard>
      ))}
    </FeatureContainer>
    <CloudBackground />
  </Section>
);

export default DifferenceSection;