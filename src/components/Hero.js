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
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    // padding: 40px;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  overflow: hidden;
  height: 500px;
  background-color: #003366;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;



const CarouselImage = styled.img`
 
`;

const StyledCarousel = styled(Carousel)`
  height: 100%;

  .slick-dots {
    bottom: 10px;
  }

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
      <ImageSection>
        <StyledCarousel
          autoplay
          infinite
          dots
          effect="fade"
        >
          {schoolImages.map((school, index) => (
            <div key={index}>
              <CarouselImage src={school} alt={`School Image ${index + 1}`} style={{height:"600px"}} />
            </div>
          ))}
        </StyledCarousel>
      </ImageSection>
      
    </Container>
  );
};

export default AboutIntroduction;