import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BookOpen, Users, Compass, Leaf } from 'lucide-react';

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
  text-align: center;
  font-family: Arial, sans-serif;
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

const Title = styled.h2`
  color: #FF6F00;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;
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
    bottom: -10px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }

  animation: ${fadeIn} 1s ease-out;
`;

const Subtitle = styled.p`
  color: #4A4A4A;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  animation: ${slideIn} 1s ease-out 0.3s both;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 30px 20px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  animation: ${slideIn} 1s ease-out ${props => 0.3 + props.index * 0.1}s both;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #4CAF50;
`;

const FeatureIcon = styled.div`
  color: #FF6F00;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #4A4A4A;
  line-height: 1.6;
`;

const MontessoriProcessFlow = () => {
  const features = [
    {
      icon: <BookOpen size={48} />,
      title: "Prepared Environment",
      description: "Carefully curated spaces that encourage exploration and learning"
    },
    {
      icon: <Users size={48} />,
      title: "Mixed-Age Classrooms",
      description: "Promoting peer learning and social development"
    },
    {
      icon: <Compass size={48} />,
      title: "Self-Directed Learning",
      description: "Empowering children to choose their activities and pace"
    },
    {
      icon: <Leaf size={48} />,
      title: "Holistic Development",
      description: "Nurturing intellectual, physical, and emotional growth"
    }
  ];

  return (
    <Container>
      <Title>Nurturing Young Minds the Montessori Way</Title>
      <Subtitle>
        Our Montessori approach fosters independence, critical thinking, and a lifelong love for learning in a carefully prepared environment.
      </Subtitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index} index={index}>
            <FeatureIcon>
              {feature.icon}
            </FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </Container>
  );
};

export default MontessoriProcessFlow;