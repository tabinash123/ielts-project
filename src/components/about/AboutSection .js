import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { CheckOutlined, PhoneOutlined } from '@ant-design/icons';

const SectionWrapper = styled.section`
  padding: 60px 0;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const AboutAgency = styled.h4`
  color: #e91e63;
  font-size: 16px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  color: #003366;
  font-size: 36px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 20px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
`;

const FeatureItem = styled.li`
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const StyledCheckOutlined = styled(CheckOutlined)`
  color: #e91e63;
  margin-right: 10px;
`;

const MoreDetailsButton = styled(Button)`
  background-color: #e91e63;
  border-color: #e91e63;
  height: 48px;
  padding: 0 30px;
  font-size: 16px;
  &:hover, &:focus {
    background-color: #d81b60;
    border-color: #d81b60;
  }
`;

const PhoneNumber = styled.div`
  display: inline-flex;
  align-items: center;
  margin-left: 20px;
  color: #003366;
  font-size: 18px;
  font-weight: bold;
`;

const StyledPhoneOutlined = styled(PhoneOutlined)`
  background-color: #f0f0f0;
  border-radius: 50%;
  padding: 10px;
  margin-right: 10px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px; // Adjust this value to match your desired image height
  background-color: #e0e0e0; // Placeholder color
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    border: 2px solid #e91e63;
    border-radius: 8px;
    pointer-events: none;
  }
`;

const AboutSection = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12}>
            <AboutAgency>ABOUT AGENCY</AboutAgency>
            <Title>Service You Can Rely On Experience You Can Trust</Title>
            <Description>
              We will provide you with a comprehensive, no-hassle breakdown of all service
              fees from beginning to end once you have determined that you are satisfied
              with our assessment! Additionally, we provide cost-free, adaptable payment
              plans.
            </Description>
            <FeatureList>
              <FeatureItem>
                <StyledCheckOutlined />
                Talk to one of our best consultant today
              </FeatureItem>
              <FeatureItem>
                <StyledCheckOutlined />
                Our experts are able to find new growth
              </FeatureItem>
              <FeatureItem>
                <StyledCheckOutlined />
                Find more information our website
              </FeatureItem>
            </FeatureList>
            <MoreDetailsButton type="primary" size="large">
              MORE DETAILS
            </MoreDetailsButton>
            <PhoneNumber>
              <StyledPhoneOutlined />
              +0 123 888 555
            </PhoneNumber>
          </Col>
          <Col xs={24} lg={12}>
            <ImagePlaceholder />
          </Col>
        </Row>
      </ContentWrapper>
    </SectionWrapper>
  );
};

export default AboutSection;