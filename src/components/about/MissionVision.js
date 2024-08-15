import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: Arial, sans-serif;
  background-color: #FFF9C4;
  padding: 60px 20px;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  background: linear-gradient(to right, #FF9800, #FFA726);
  height: 5px;
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  color: #424242;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #FF9800;
  }
`;

const Paragraph = styled.p`
  color: #616161;
  font-size: 0.9rem;
  line-height: 1.8;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const MissionVision = () => {
  return (
    <Section>
      <ContentWrapper>
        <Header />
        <Content>
          <Column>
            <Title>Our Mission</Title>
            <Paragraph>
              At Sungava Balsansar Montessori School, our mission is to provide a nurturing and stimulating environment where 
              children can develop their full potential. We are dedicated to implementing the Montessori method, which 
              respects each child's unique learning style and pace. Our goal is to foster independence, critical thinking, 
              and a lifelong love for learning. We strive to create a community where children, parents, and educators work 
              together to support the holistic development of each child - intellectually, physically, emotionally, and socially.
            </Paragraph>
          </Column>
          <Column>
            <Title>Our Vision</Title>
            <Paragraph>
              We envision Sungava Balsansar Montessori School as a beacon of child-centered education in Chitwan. We aim to 
              be recognized as a leading institution that prepares children not just for academic success, but for life. Our 
              vision is to create global citizens who are confident, compassionate, and creative problem-solvers. We see a 
              future where our students become lifelong learners, critical thinkers, and responsible members of their 
              communities, equipped with the skills and values necessary to thrive in an ever-changing world.
            </Paragraph>
          </Column>
        </Content>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVision;