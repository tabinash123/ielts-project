import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Header = styled.div`
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  height: 10px;
`;

const Content = styled.div`
  padding: 40px;
`;

const StyledTitle = styled(Title)`
  && {
    color: #333;
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
      background-color: #ff7e5f;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  && {
    color: #555;
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
                At Sadhana Montessori, our mission is to cultivate the unique potential of every child. We believe in the power of 
                holistic education, nurturing the mind, body, and spirit. Our approach is rooted in the Montessori philosophy, 
                empowering students to explore, discover, and grow at their own pace. We are committed to creating a safe, 
                supportive environment that celebrates diversity, encourages curiosity, and inspires a lifelong love of learning.
              </StyledParagraph>
            </Col>
            <Col xs={24} md={12}>
              <StyledTitle level={3}>Our Vision</StyledTitle>
              <StyledParagraph>
                We envision a world where children are celebrated as unique individuals, each with their own gifts, talents, and 
                interests. A world where education is a journey of self-discovery, guided by curiosity and fueled by imagination. A world 
                where students are empowered to think critically, collaborate creatively, and contribute meaningfully to their 
                communities. A world where learning is a joyful, transformative experience that prepares children for a lifetime of 
                growth, purpose, and fulfillment. This is the world we aspire to create at Sadhana Montessori.
              </StyledParagraph>
            </Col>
          </Row>
        </Content>
      </ContentWrapper>
    </Section>
  );
};

export default MissionVision;