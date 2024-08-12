import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import parent1 from '../assets/parents/parent1.jpg';
import parent2 from '../assets/parents/parent2.jpg';
import parent3 from '../assets/parents/parent3.jpg';

const TestimonialSection = styled.section`
  background-color: #f2e6fe;
  color: #424242;
  padding: 90px 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  position: relative;
  padding-left: 20px;
  text-transform: uppercase;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 80%;
    background-color: #4FB3FF;
  }
  
  @media (max-width: 480px) {
    font-size: 22px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const TestimonialItem = styled.div`
  text-align: left;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin: 0 15px;
  max-width: 280px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const TestimonialImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TestimonialContent = styled.p`
  font-size: 14px;
  color: #616161;
  margin: 0 0 15px 0;
`;

const TestimonialName = styled.h3`
  font-size: 16px;
  margin: 0 0 5px 0;
  color: #424242;
`;

const TestimonialTitle = styled.p`
  font-size: 12px;
  color: #9c27b0;
  margin: 0;
`;

const BlueLine = styled.div`
  height: 2px;
  background-color: #4FB3FF;
  width: 40px;
  margin-bottom: 15px;
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
  }
  
  .slick-dots {
    bottom: -40px;
    
    li button:before {
      font-size: 12px;
      color: #4FB3FF;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
  }
`;

const ParentTestimonials = () => {
  const testimonials = [
    { 
      name: 'Aarav Sharma', 
      title: 'Parent of 5-year-old', 
      image: parent1,
      content: 'Sungava Balsansar has been a blessing for our family. The Montessori approach has helped our daughter become more independent and confident in her abilities.'
    },
    { 
      name: 'Priya Thapa', 
      title: 'Mother of twins', 
      image: parent2,
      content: 'We\'ve seen remarkable progress in our twins since they started at Sungava Balsansar. The teachers are attentive and the environment truly nurtures their individual growth.'
    },
    { 
      name: 'Rajesh Adhikari', 
      title: 'Father of 3-year-old', 
      image: parent3,
      content: 'The holistic development approach at Sungava Balsansar is impressive. Our son has not only improved academically but also socially and emotionally.'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <TestimonialSection>
      <SectionHeader>
        <Title>Parent Testimonials</Title>
      </SectionHeader>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialImageWrapper>
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            </TestimonialImageWrapper>
            <BlueLine />
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
          </TestimonialItem>
        ))}
      </StyledSlider>
    </TestimonialSection>
  );
};

export default ParentTestimonials;