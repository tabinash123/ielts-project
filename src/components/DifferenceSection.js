import React from 'react';
import styled from 'styled-components';
import { Home, Users, Building, Smile } from 'lucide-react';

const Container = styled.div`
  background-color: #FFF9C4; // Changed to match the intro component's background
  padding: 2rem;
  font-family: Arial, sans-serif;
  text-align: center;
  border-radius: 20px; // Added for a softer look
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Added for depth
`;

const Title = styled.h1`
  color: #424242;
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 700; // Added for emphasis

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background-color: #FF9800; // Changed to match the intro component's accent color
  margin: 0 auto 1.5rem;
  border-radius: 2px; // Added for a softer look

  @media (min-width: 768px) {
    width: 90px;
  }

  @media (min-width: 1024px) {
    width: 100px;
  }
`;

const Description = styled.p`
  color: #616161;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 90%;
  margin: 0 auto 2rem;

  @media (min-width: 768px) {
    font-size: 0.95rem;
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    max-width: 800px;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 250px;
  margin: 1rem 0;
  transition: transform 0.3s ease; // Added for interactivity

  &:hover {
    transform: translateY(-5px); // Added for interactivity
  }

  @media (min-width: 768px) {
    width: 45%;
    margin: 1rem;
  }

  @media (min-width: 1024px) {
    width: 200px;
  }
`;

const IconCircle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease; // Added for interactivity

  ${Feature}:hover & {
    transform: scale(1.1); // Added for interactivity
  }

  @media (min-width: 768px) {
    width: 75px;
    height: 75px;
  }

  @media (min-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`;

const FeatureText = styled.p`
  color: #424242;
  font-size: 0.85rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }

  @media (min-width: 1024px) {
    font-size: 0.9rem;
  }
`;

const MontessoriFeatures = () => {
  const features = [
    { icon: <Home size={35} color="white" />, text: "A Safe and Caring Environment", color: "#e91e63" },
    { icon: <Users size={35} color="white" />, text: "Experienced and Qualified Teachers", color: "#ffc107" },
    { icon: <Building size={35} color="white" />, text: "A spacious and state-of-the-art facility", color: "#8bc34a" },
    { icon: <Smile size={35} color="white" />, text: "Fun-filled-activity based approach to learning", color: "#9c27b0" },
  ];

  return (
    <Container>
      <Title>Your Child's Second Home</Title>
      <Underline />
      <Description>
        Our preschool fosters an environment in which all children can reach their full potential. We focus on building and practicing fundamental
        social, emotional, and problem-solving abilities that children will need throughout their schooling, and not just textbook learning.
      </Description>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature key={index}>
            <IconCircle style={{ backgroundColor: feature.color }}>{feature.icon}</IconCircle>
            <FeatureText>{feature.text}</FeatureText>
          </Feature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default MontessoriFeatures;