import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import staff1 from '../assets/parents/parent1.jpg';
import staff2 from '../assets/parents/parent2.jpg';
import staff3 from '../assets/parents/parent3.jpg';

const TestimonialSection = styled.section`
  background-color: #ffffff;
  color: #000000;
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
    background-color: #e53935;
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
  padding: 20px; /* Reduce padding to make the container smaller */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  margin: 0 15px; /* Adding margin to give space between the cards */
  max-width: 280px; /* Setting a max-width to reduce the overall size */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const TestimonialImageWrapper = styled.div`
  width: 80px; /* Reduce the image wrapper size */
  height: 80px; /* Reduce the image wrapper size */
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
  font-size: 14px; /* Reduce the font size */
  color: #000000;
  margin: 0 0 15px 0;
`;

const TestimonialName = styled.h3`
  font-size: 16px; /* Reduce the font size */
  margin: 0 0 5px 0;
  color: #000000;
`;

const TestimonialTitle = styled.p`
  font-size: 12px; /* Reduce the font size */
  color: #000000;
  margin: 0;
`;

const RedLine = styled.div`
  height: 2px;
  background-color: #e53935;
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
      color: #e53935;
      opacity: 0.25;
    }
    
    li.slick-active button:before {
      opacity: 1;
    }
  }
`;

const UserTestimonials = () => {
  const testimonials = [
    { 
      name: 'John Doe', 
      title: 'Satisfied Customer', 
      image: staff1,
      content: 'Absolutely love my new tattoo! The artists here are true professionals and made the whole experience enjoyable.'
    },
    { 
      name: 'Jane Smith', 
      title: 'Repeat Client', 
      image: staff2,
      content: 'I ve been coming here for years and every tattoo is a masterpiece. The attention to detail is unmatched.'
    },
    { 
      name: 'Mike Johnson', 
      title: 'First-Time Client', 
      image: staff3,
      content: 'As a first-timer, I was nervous, but the staff made me feel comfortable throughout the entire process. Highly recommend!'
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
        <Title>Parent Review</Title>
      </SectionHeader>
      <StyledSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index}>
            <TestimonialImageWrapper>
              <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            </TestimonialImageWrapper>
            <RedLine />
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialName>{testimonial.name}</TestimonialName>
            <TestimonialTitle>{testimonial.title}</TestimonialTitle>
          </TestimonialItem>
        ))}
      </StyledSlider>
    </TestimonialSection>
  );
};

export default UserTestimonials;
