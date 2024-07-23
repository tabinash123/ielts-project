import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const ContactSection = styled.section`
  padding: 40px 0;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const ContactItem = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 10px;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #ff4d4f;
  margin-bottom: 20px;
`;

const Title = styled.h3`
  color: #003366;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Info = styled.p`
  color: #666;
  margin: 5px 0;
  font-size: 18px;
`;

const CustomMailIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 20px;
  background-color: #ff4d4f;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background-color: white;
    transform: translateY(-50%);
  }
`;

const ContactInfo = () => {
  return (
    <ContactSection>
      <ContactContainer>
        <Row gutter={[40, 40]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <ContactItem>
              <IconWrapper>
                <PhoneOutlined />
              </IconWrapper>
              <Title>Phone</Title>
              <Info>(+44) 123 456 789</Info>
              <Info>(+44) 152-567-987</Info>
            </ContactItem>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ContactItem>
              <IconWrapper>
                <EnvironmentOutlined />
              </IconWrapper>
              <Title>Location</Title>
              <Info>66 Guild Street 512B,</Info>
              <Info>Great North Town.</Info>
            </ContactItem>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <ContactItem>
              <CustomMailIcon />
              <Title>Email</Title>
              <Info>example@youremail.com</Info>
              <Info>info@youremail.com</Info>
            </ContactItem>
          </Col>
        </Row>
      </ContactContainer>
    </ContactSection>
  );
};

export default ContactInfo;
