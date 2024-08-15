import React from 'react';
import styled from 'styled-components';
import { BookOpen, Users, Compass, Leaf } from 'lucide-react';

const Container = styled.div`
  margin: 0 auto;
  padding: 60px 20px;
  text-align: center;
  background-color: #FFF9C4;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
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

const Subtitle = styled.p`
  color: #616161;
  font-size: 0.9rem;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #FF9800;
`;

const FeatureIcon = styled.div`
  color: #FF9800;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #616161;
  line-height: 1.5;
`;

const MontessoriProcessFlow = () => {
  return (
    <Container>
      <Title>Nurturing Young Minds the Montessori Way</Title>
      <Subtitle>
        Our Montessori approach fosters independence, critical thinking, and a lifelong love for learning in a carefully prepared environment.
      </Subtitle>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureIcon>
            <BookOpen size={36} />
          </FeatureIcon>
          <FeatureTitle>Prepared Environment</FeatureTitle>
          <FeatureDescription>Carefully curated spaces that encourage exploration and learning</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Users size={36} />
          </FeatureIcon>
          <FeatureTitle>Mixed-Age Classrooms</FeatureTitle>
          <FeatureDescription>Promoting peer learning and social development</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Compass size={36} />
          </FeatureIcon>
          <FeatureTitle>Self-Directed Learning</FeatureTitle>
          <FeatureDescription>Empowering children to choose their activities and pace</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>
            <Leaf size={36} />
          </FeatureIcon>
          <FeatureTitle>Holistic Development</FeatureTitle>
          <FeatureDescription>Nurturing intellectual, physical, and emotional growth</FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </Container>
  );
};

export default MontessoriProcessFlow;