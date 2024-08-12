import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(to right, #4FB3FF, #B39DDB);
  height: 10px;
`;

const Content = styled.div`
  padding: 40px;
`;

const StyledTitle = styled(Title)`
  && {
    color: #424242;
    font-size: 28px;
    margin-bottom: 20px;
    position: relative;
    padding-bottom: 10px;
    

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background-color: #4FB3FF;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  && {
    color: #616161;
    font-size: 16px;
    line-height: 1.8;
  }
`;

const MissionVision = () => {
  return (
    <Section>
      <ContentWrapper>
        <Header />
        <Content>
          <Row gutter={[40, 40]}>
            <Col xs={24} md={12}>
              <StyledTitle level={3}>Our Mission</StyledTitle>
              <StyledParagraph>
                At Sungava Balsansar Montessori School, our mission is to provide a nurturing and stimulating environment where 
                children can develop their full potential. We are dedicated to implementing the Montessori method, which 
                respects each child's unique learning style and pace. Our goal is to foster independence, critical thinking, 
                and a lifelong love for learning. We strive to create a community where children, parents, and educators work 
                together to support the holistic development of each child - intellectually, physically, emotionally, and socially.
              </StyledParagraph>
            </Col>
            <Col xs={24} md={12}>
              <StyledTitle level={3}>Our Vision</StyledTitle>
              <StyledParagraph>
                We envision Sungava Balsansar Montessori School as a beacon of child-centered education in Chitwan. We aim to 
                be recognized as a leading institution that prepares children not just for academic success, but for life. Our 
                vision is to create global citizens who are confident, compassionate, and creative problem-solvers. We see a 
                future where our students become lifelong learners, critical thinkers, and responsible members of their 
                communities, equipped with the skills and values necessary to thrive in an ever-changing world.
              </StyledParagraph>
            </Col>
          </Row>
        </Content>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVision;