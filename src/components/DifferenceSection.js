import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Home, Users, Building, Smile } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.section`
  padding: 3rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 3rem;
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

const Title = styled.h2`
  color: #FF6F00;
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }

  animation: ${fadeIn} 1s ease-out;
`;

const Underline = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #FF6F00, #FFA000);
  margin: 0 auto 1.5rem;
  border-radius: 2px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    width: 100px;
  }

  @media (min-width: 1024px) {
    width: 120px;
  }
`;

const Description = styled.p`
  color: #4A4A4A;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 90%;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    max-width: 80%;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    max-width: 800px;
  }

  animation: ${slideIn} 1s ease-out 0.3s both;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  animation: ${fadeIn} 1s ease-out ${props => 0.6 + props.index * 0.2}s both;
`;

const IconCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  ${Feature}:hover & {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media (min-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;

const FeatureText = styled.p`
  color: #4A4A4A;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const MontessoriFeatures = () => {
  const features = [
    { icon: <Home size={40} color="white" />, text: "A Safe and Caring Environment", color: "#e91e63" },
    { icon: <Users size={40} color="white" />, text: "Experienced and Qualified Teachers", color: "#ffc107" },
    { icon: <Building size={40} color="white" />, text: "Spacious State-of-the-Art Facility", color: "#8bc34a" },
    { icon: <Smile size={40} color="white" />, text: "Fun-Filled Activity-Based Learning", color: "#9c27b0" },
  ];

  return (
    <Container>
      <Title>Your Child's Second Home</Title>
      <Underline />
      <Description>
        Our preschool nurtures an environment where every child can flourish. We focus on developing essential social, emotional, and problem-solving skills that children will carry throughout their educational journey, going beyond traditional textbook learning.
      </Description>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature key={index} index={index}>
            <IconCircle style={{ backgroundColor: feature.color }}>{feature.icon}</IconCircle>
            <FeatureText>{feature.text}</FeatureText>
          </Feature>
        ))}
      </FeaturesContainer>
    </Container>
  );
};

export default MontessoriFeatures;