import React from 'react';
import styled from 'styled-components';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #ff1493;
    font-size: 18px;
    margin-bottom: 20px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 30px;
      height: 2px;
      background-color: #ff1493;
    }
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 10px;

    a {
      color: #cccccc;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ff1493;
      }
    }
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
    color: #ff1493;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    color: #ffffff;
    font-size: 24px;
    transition: color 0.3s ease;

    &:hover {
      color: #ff1493;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #333333;
  font-size: 14px;
  color: #888888;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <FooterLinks>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Our Team</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/testimonials">Testimonials</a></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h3>Programs</h3>
          <FooterLinks>
            <li><a href="/programs/toddler">Toddler Program</a></li>
            <li><a href="/programs/preschool">Preschool Program</a></li>
            <li><a href="/programs/kindergarten">Kindergarten</a></li>
            <li><a href="/programs/after-school">After School Care</a></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h3>Parents Corner</h3>
          <FooterLinks>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/calendar">School Calendar</a></li>
            <li><a href="/resources">Parent Resources</a></li>
            <li><a href="/faq">FAQ</a></li>
          </FooterLinks>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <ContactInfo>
            <EnvironmentOutlined />
            <span>123 Education St, Cityville, State 12345</span>
          </ContactInfo>
          <ContactInfo>
            <PhoneOutlined />
            <span>(123) 456-7890</span>
          </ContactInfo>
          <ContactInfo>
            <MailOutlined />
            <span>info@motherspridepreschool.com</span>
          </ContactInfo>
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookOutlined /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><InstagramOutlined /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinOutlined /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} Mother's Pride Preschool. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;