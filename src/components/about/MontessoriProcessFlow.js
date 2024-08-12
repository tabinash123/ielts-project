import React from 'react';
import styled from 'styled-components';
import { BookOpen, Users, Compass, Leaf } from 'lucide-react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f2e6fe;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #424242;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #616161;
  max-width: 600px;
  margin: 0 auto 30px;

  @media (min-width: 768px) {
    font-size: 15px;
    margin-bottom: 35px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled.div`
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    padding: 25px;
  }

  @media (min-width: 1024px) {
    padding: 30px 20px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #4FB3FF;

  @media (min-width: 768px) {
    font-size: 19px;
    margin-bottom: 13px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

const FeatureIcon = styled.div`
  color: #9c27b0;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 13px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 15px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 13px;
  color: #616161;

  @media (min-width: 768px) {
    font-size: 13.5px;
  }

  @media (min-width: 1024px) {
    font-size: 14px;
  }
`;

const MontessoriProcessFlow = () => {
  return (
    <Container>
      <Title>Sungava Balsansar: Nurturing Young Minds the Montessori Way</Title>
      <Subtitle>
        Our Montessori approach fosters independence, critical thinking, and a lifelong love for learning in a carefully prepared environment.
      </Subtitle>
      <FeaturesGrid>
        <FeatureCard>
          <FeatureTitle>Prepared Environment</FeatureTitle>
          <FeatureIcon>
            <BookOpen size={36} />
          </FeatureIcon>
          <FeatureDescription>Carefully curated spaces that encourage exploration and learning</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Mixed-Age Classrooms</FeatureTitle>
          <FeatureIcon>
            <Users size={36} />
          </FeatureIcon>
          <FeatureDescription>Promoting peer learning and social development</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Self-Directed Learning</FeatureTitle>
          <FeatureIcon>
            <Compass size={36} />
          </FeatureIcon>
          <FeatureDescription>Empowering children to choose their activities and pace</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>Holistic Development</FeatureTitle>
          <FeatureIcon>
            <Leaf size={36} />
          </FeatureIcon>
          <FeatureDescription>Nurturing intellectual, physical, and emotional growth</FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>
    </Container>
  );
};

export default MontessoriProcessFlow;