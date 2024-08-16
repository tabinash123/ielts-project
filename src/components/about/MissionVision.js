import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Section = styled.section`
  font-family: Arial, sans-serif;
  padding: 60px 20px;
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

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  background: linear-gradient(to right, #FF6F00, #FFA000);
  height: 5px;
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out;
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
  animation: ${slideIn} 1s ease-out;
`;

const Title = styled.h2`
  color: #FF6F00;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);

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
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #FF6F00, #FFA000);
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  color: #4A4A4A;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }

  animation: ${slideIn} 1s ease-out 0.3s both;
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
              and a lifelong love for learning.
            </Paragraph>
            <Paragraph>
              We strive to create a community where children, parents, and educators work
              together to support the holistic development of each child - intellectually, physically, emotionally, and socially.
            </Paragraph>
          </Column>
          <Column>
            <Title>Our Vision</Title>
            <Paragraph>
              We envision Sungava Balsansar Montessori School as a beacon of child-centered education in Chitwan. We aim to
              be recognized as a leading institution that prepares children not just for academic success, but for life. Our
              vision is to create global citizens who are confident, compassionate, and creative problem-solvers.
            </Paragraph>
            <Paragraph>
              We see a future where our students become lifelong learners, critical thinkers, and responsible members of their
              communities, equipped with the skills and values necessary to thrive in an ever-changing world.
            </Paragraph>
          </Column>
        </Content>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVision;