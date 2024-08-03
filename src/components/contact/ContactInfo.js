import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdPhone, MdWhatsapp, MdCall, MdLocationOn } from 'react-icons/md';
import image from '../../assets/gallary/10.png';
const ContactInfo = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <ImageContainer>
          <img src={image} alt="Contact" />
        </ImageContainer>
        <InfoContainer>
          <Section>
            <Title>Contact Information</Title>
            <InfoList>
              <InfoItem>
                <IconWrapper color="#DD4B3E">
                  <MdEmail />
                </IconWrapper>
                hariaryal222@gmail.com
              </InfoItem>
              <InfoItem>
                <IconWrapper color="#DD4B3E">
                  <MdPhone />
                </IconWrapper>
                +1 234 567 890
              </InfoItem>
              <InfoItem>
                <IconWrapper color="#25D366">
                  <MdWhatsapp />
                </IconWrapper>
                +1 234 567 891
              </InfoItem>
              <InfoItem>
                <IconWrapper color="#0088CC">
                  <MdCall />
                </IconWrapper>
                +1 234 567 892
              </InfoItem>
              <InfoItem>
                <IconWrapper color="#DD4B3E">
                  <MdLocationOn />
                </IconWrapper>
                Sesamati Khola, Kathmandu
              </InfoItem>
            </InfoList>
          </Section>
          
          <Section>
            <Title>Business Hours</Title>
            <HoursList>
              <HoursItem>Monday - Friday: 9:00 AM - 5:00 PM</HoursItem>
              <HoursItem>Saturday: 10:00 AM - 2:00 PM</HoursItem>
              <HoursItem>Sunday: Closed</HoursItem>
            </HoursList>
          </Section>
        </InfoContainer>
      </ContentContainer>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // min-height: 100vh;
  // padding: 20px;
  background-color: #ffffff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  // border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    width: 50%;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
  font-size: 20px;
  margin-bottom: 15px;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  color: ${props => props.color};
`;

const HoursList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const HoursItem = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
`;

export default ContactInfo;