import React from 'react';
import styled from 'styled-components';
import { Typography, Row, Col } from 'antd';
import { BookOutlined, FormOutlined, TrophyOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const ProcessSection = styled.section`
  padding: 40px 0;
  text-align: center;
  background-color: #ffffff;
`;

const SubTitle = styled(Title)`
  color: #e91e63 !important;
  font-size: 16px !important;
  margin-bottom: 0 !important;
`;

const ProcessTitle = styled(Title)`
  color: #0e3e6b !important;
  font-size: 36px !important;
  margin-top: 0 !important;
  margin-bottom: 40px !important;
`;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  background-color: #0e3e6b;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  border-radius: 30px;
  box-shadow: 
    12px 12px 0 -4px #0e3e6b,
    12px 12px 0 0 #0e3e6b;
`;

const StepNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #e91e63;
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
`;

const StepTitle = styled(Title)`
  color: #0e3e6b !important;
  font-size: 20px !important;
  margin-bottom: 10px !important;
`;

const StepDescription = styled(Paragraph)`
  color: #666;
  font-size: 14px;
  max-width: 250px;
  margin: 0 auto;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 60px;
  right: -16px;
  z-index: 1;
`;

const Arrow = styled.div`
  width: 60px;
  height: 60px;
  border-left: 3px solid #e0c555;
  border-bottom: 3px solid #e0c555;
  
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: -7px;
    bottom: -5px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #e0c555;
    border-right: 8px solid transparent;
    transform: rotate(-90deg);
  }
`;

const StepContainer = styled.div`
  position: relative;
`;

const IELTSProcessFlow = () => (
  <ProcessSection>
    <SubTitle level={5}>OUR PROCESS</SubTitle>
    <ProcessTitle level={2}>IELTS Preparation Flow</ProcessTitle>
    <Row gutter={[32, 32]} justify="center" align="top">
      <Col xs={24} sm={8}>
        <StepContainer>
          <ProcessStep>
            <IconWrapper>
              <BookOutlined style={{ fontSize: '60px', color: 'white' }} />
              <StepNumber>01</StepNumber>
            </IconWrapper>
            <StepTitle level={4}>Skill Assessment</StepTitle>
            <StepDescription>
              Evaluate your current English proficiency and identify areas for improvement
            </StepDescription>
          </ProcessStep>
          <ArrowContainer>
            <Arrow />
          </ArrowContainer>
        </StepContainer>
      </Col>
      <Col xs={24} sm={8}>
        <StepContainer>
          <ProcessStep>
            <IconWrapper>
              <FormOutlined style={{ fontSize: '60px', color: 'white' }} />
              <StepNumber>02</StepNumber>
            </IconWrapper>
            <StepTitle level={4}>Targeted Practice</StepTitle>
            <StepDescription>
              Focus on enhancing your skills in reading, writing, listening, and speaking
            </StepDescription>
          </ProcessStep>
          <ArrowContainer>
            <Arrow />
          </ArrowContainer>
        </StepContainer>
      </Col>
      <Col xs={24} sm={8}>
        <ProcessStep>
          <IconWrapper>
            <TrophyOutlined style={{ fontSize: '60px', color: 'white' }} />
            <StepNumber>03</StepNumber>
          </IconWrapper>
          <StepTitle level={4}>Test Strategies</StepTitle>
          <StepDescription>
            Learn effective techniques to maximize your performance on exam day
          </StepDescription>
        </ProcessStep>
      </Col>
    </Row>
  </ProcessSection>
);

export default IELTSProcessFlow;