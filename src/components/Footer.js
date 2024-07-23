import React from 'react';
import styled from 'styled-components';
import { Input, Button, Row, Col } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const FooterWrapper = styled.footer`
  background-color: #00264d;
  color: white;
  padding: 40px 60px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 43px;
  background-color: #e91e63;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 16px solid white;
  transform: rotate(90deg);
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  line-height: 1;
`;

const Tagline = styled.span`
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

const FooterColumn = styled.div`
  margin-bottom: 20px;
`;

const FooterTitle = styled.h4`
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const FooterLink = styled.a`
  color: #b3b3b3;
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  &:hover {
    color: #fff;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  color: #b3b3b3;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: #e91e63;
`;

const SubscribeInput = styled(Input)`
  margin-bottom: 10px;
`;

const SubscribeButton = styled(Button)`
  background-color: #e91e63;
  border-color: #e91e63;
  &:hover, &:focus {
    background-color: #d81b60;
    border-color: #d81b60;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: #b3b3b3;
`;

const Footer = () => (
  <FooterWrapper>
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={24} md={10} lg={10}>
        <Logo>
          <LogoIcon>
            <ArrowIcon />
          </LogoIcon>
          <LogoText>
            <BrandName>ABROAD</BrandName>
            <Tagline>TOURISTS WITH AID</Tagline>
          </LogoText>
        </Logo>
        <Description>We assist you to your visa and immigration process and coaching.</Description>
        <SocialIcons>
          <SocialIcon href="#"><FacebookOutlined /></SocialIcon>
          <SocialIcon href="#"><TwitterOutlined /></SocialIcon>
          <SocialIcon href="#"><InstagramOutlined /></SocialIcon>
          <SocialIcon href="#"><LinkedinOutlined /></SocialIcon>
        </SocialIcons>
      </Col>
      <Col xs={24} sm={8} md={4} lg={4}>
        <FooterColumn>
          <FooterTitle>Coaching</FooterTitle>
          <FooterLink href="#">TOEFL Classes</FooterLink>
          <FooterLink href="#">Qualification Exam</FooterLink>
          <FooterLink href="#">PTE Coaching</FooterLink>
        </FooterColumn>
      </Col>
      <Col xs={24} sm={8} md={4} lg={4}>
        <FooterColumn>
          <FooterTitle>Quick Link</FooterTitle>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Agents</FooterLink>
        </FooterColumn>
      </Col>
      <Col xs={24} sm={8} md={6} lg={6}>
        <FooterColumn>
          <FooterTitle>Newsletter</FooterTitle>
          <SubscribeInput placeholder="Subscribe with us" />
          <SubscribeButton type="primary" block>SUBSCRIBE</SubscribeButton>
        </FooterColumn>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <ContactInfo>
          <ContactIcon><PhoneOutlined /></ContactIcon>
          Phone: (+44) 123 456 789
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><MailOutlined /></ContactIcon>
          Email: info@yourdomain.com
        </ContactInfo>
        <ContactInfo>
          <ContactIcon><EnvironmentOutlined /></ContactIcon>
          Location: 66 Guild Street 512B, Great NT
        </ContactInfo>
      </Col>
    </Row>
    <Copyright>
      © 2024 Abroad is Powered by <a href="https://chitrakootweb.com" style={{ color: '#e91e63' }}>Chitrakoot Web</a>
    </Copyright>
  </FooterWrapper>
);

export default Footer;
