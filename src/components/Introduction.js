import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { CheckOutlined, PhoneOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';

// Import your school images
import school1 from '../assets/gallary/1.png';
import school2 from '../assets/gallary/2.png';
import school3 from '../assets/gallary/3.png';
import school4 from '../assets/gallary/4.png';
import school5 from '../assets/gallary/5.png';

const { Title, Paragraph } = Typography;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f9ff;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
    padding: 60px;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  padding-right: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    padding-right: 40px;
    margin-bottom: 0;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
  min-height: 200px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    min-height: 300px;
  }

  @media (min-width: 1024px) {
    min-height: 400px;
  }
`;

const StyledTitle = styled(Title)`
  && {
    color: #ff6b6b;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
`;

const StyledHeading = styled(Title)`
  && {
    color: #4ecdc4;
    font-size: 28px;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 16px;

    @media (min-width: 768px) {
      font-size: 36px;
      margin-bottom: 24px;
    }

    @media (min-width: 1024px) {
      font-size: 42px;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  && {
    color: #45b7d1;
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.6;

    @media (min-width: 768px) {
      font-size: 18px;
      margin-bottom: 24px;
    }
  }
`;

const ListItem = styled.li`
  color: #45b7d1;
  font-size: 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const StyledCheckIcon = styled(CheckOutlined)`
  && {
    color: #ff6b6b;
    margin-right: 12px;
    font-size: 20px;
    background-color: #ffe66d;
    border-radius: 50%;
    padding: 4px;

    @media (min-width: 768px) {
      font-size: 24px;
      padding: 6px;
    }
  }
`;

const ContactButton = styled(Button)`
  && {
    background-color: #ff6b6b;
    border-color: #ff6b6b;
    color: white;
    font-size: 16px;
    height: auto;
    padding: 10px 20px;
    border-radius: 30px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff8e8e;
      border-color: #ff8e8e;
      transform: translateY(-2px);
    }

    .anticon {
      margin-left: 8px;
    }
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: #ff6b6b;
  }

  .slick-dots li.slick-active button {
    background: #ff8e8e;
  }
`;

const AboutIntroduction = () => {
  const schoolImages = [school1, school2, school3, school4, school5];

  return (
    <Container>
      <ContentSection>
        <StyledTitle level={4}>Welcome to Little Minds Montessori</StyledTitle>
        <StyledHeading level={2}>
          Where Learning is
          <br />
          Fun and Magical!
        </StyledHeading>
        <StyledParagraph>
          At Little Minds Montessori in Kathmandu, we believe every child is a unique star waiting to shine. 
          Since 2010, we've been creating a colorful world of wonder where young explorers can learn, 
          play, and grow. Our Montessori approach nurtures curiosity, creativity, and confidence in every little mind.
        </StyledParagraph>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <ListItem>
            <StyledCheckIcon />
            Playful learning adventures every day
          </ListItem>
          <ListItem>
            <StyledCheckIcon />
            Safe, loving environment for all children
          </ListItem>
          <ListItem>
            <StyledCheckIcon />
            Helping little stars reach their full potential
          </ListItem>
        </ul>
        <ContactButton icon={<PhoneOutlined />}>
          Contact Us <RightOutlined />
        </ContactButton>
      </ContentSection>
      <ImageSection>
        <StyledCarousel
          autoplay
          infinite
          dots
          effect="fade"
        >
          {schoolImages.map((school, index) => (
            <div key={index}>
              <CarouselImage src={school} alt={`School Image ${index + 1}`} />
            </div>
          ))}
        </StyledCarousel>
      </ImageSection>
    </Container>
  );
};

export default AboutIntroduction;