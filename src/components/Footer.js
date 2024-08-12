import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Row, Col, Typography, Input, Button } from 'antd';
import { 
  PhoneOutlined, 
  MailOutlined, 
  EnvironmentOutlined, 
  FacebookOutlined, 
  InstagramOutlined, 
  TwitterOutlined,
  SendOutlined
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Text, Paragraph } = Typography;

const StyledFooter = styled(Footer)`
  background-color: #f8f4e6;
  color: #333;
  padding: 60px 0 30px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 10px;
    background: linear-gradient(90deg, #ff9ff3, #feca57, #ff6b6b, #48dbfb, #ff9ff3);
  }
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
`;

const FooterTitle = styled(Title)`
  color: #ff6b6b !important;
  font-size: 24px !important;
  margin-bottom: 25px !important;
  font-weight: bold !important;
`;

const FooterLink = styled(Link)`
  color: #54a0ff;
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #5f27cd;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  font-size: 16px;
  
  .anticon {
    margin-right: 15px;
    color: #ff6b6b;
    font-size: 20px;
  }
`;

const SocialIcon = styled.a`
  color: #54a0ff;
  font-size: 32px;
  margin-right: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    color: #5f27cd;
    transform: scale(1.2);
  }
`;

const Newsletter = styled.div`
  margin-top: 25px;
`;

const StyledInput = styled(Input)`
  border-radius: 20px 0 0 20px !important;
  border: 2px solid #ff6b6b !important;
  background-color: #fff !important;
  color: #333 !important;
  font-size: 16px !important;
  
  &::placeholder {
    color: #888;
  }
`;

const StyledButton = styled(Button)`
  border-radius: 0 20px 20px 0 !important;
  border: none !important;
  background-color: #ff6b6b !important;
  color: #fff !important;
  font-size: 16px !important;
  
  &:hover {
    background-color: #ff4757 !important;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 2px solid #feca57;
  color: #333;
  font-size: 14px;
`;

const FooterComponent = () => {
  return (
    <StyledFooter>
      <Row gutter={[32, 32]} justify="space-around">
        <Col xs={24} sm={12} lg={6}>
          <FooterSection>
            <FooterTitle level={4}>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/gallary">Gallary</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <FooterSection>
            <FooterTitle level={4}>Contact Us</FooterTitle>
            <ContactItem>
              <PhoneOutlined /> <Text>01 - 400 3564</Text>
            </ContactItem>
            <ContactItem>
              {/* <MailOutlined /> <Text>info@angelskingdom.com</Text> */}
            </ContactItem>
            <ContactItem>
              <EnvironmentOutlined /> <Text>Tandi,Chitwan</Text>
            </ContactItem>
          </FooterSection>
        </Col>
        <Col xs={24} sm={24} lg={8}>
          <FooterSection>
            <FooterTitle level={4}>Stay Connected</FooterTitle>
            <Paragraph style={{ color: '#333', marginBottom: '20px', fontSize: '16px' }}>
              Join our community for updates on events, activities, and educational tips!
            </Paragraph>
            <div style={{ marginBottom: '20px' }}>
              <SocialIcon href="https://www.facebook.com/SungavaBalsansarMontessoriSchool" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined />
              </SocialIcon>

            </div>
            
          </FooterSection>
        </Col>
      </Row>
      <Copyright>
        <Text>Sungava Balsansar Montessori School. All rights reserved.</Text>
      </Copyright>
    </StyledFooter>
  );
};

export default FooterComponent;