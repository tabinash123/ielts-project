import React from 'react';
import styled from 'styled-components';
import { Carousel, Button } from 'antd';
import { PlayCircleOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';

import parent1 from '../assets/parents/parent1.jpg';
import parent2 from '../assets/parents/parent2.jpg';
import parent3 from '../assets/parents/parent3.jpg';

const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
 
  span {
    color: #ff4081;
  }
`;

const TestimonialCard = styled.div`
  text-align: left;
  background-color: #ffffff;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  margin-bottom: 0px;
  // border-radius: 8px;
  // overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
`;

const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #ff4081;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

const CardText = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.6;
`;

const ViewButton = styled(Button)`
  background-color: #ff4081;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  padding: 6px 16px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
 
  &:hover {
    background-color: #e91e63;
    color: #fff;
  }
 
  .anticon {
    margin-right: 6px;
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots li button {
    background: #ff4081;
  }
  .slick-dots li.slick-active button {
    background: #e91e63;
  }
  
  .slick-slide > div {
    padding: 0 5px;
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'left' ? 'left: -20px;' : 'right: -20px;'}
  background-color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1;
 
  &:hover {
    background-color: #ff4081;
    color: #fff;
  }
`;

const ParentTestimonials = () => {
  const carouselRef = React.useRef();
  const next = () => carouselRef.current.next();
  const previous = () => carouselRef.current.prev();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Title>What Parents Say <span>♥</span></Title>
      <StyledCarousel ref={carouselRef} {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard>
              <ImagePlaceholder image={testimonial.image} />
              <CardTitle>{testimonial.title}</CardTitle>
              <CardText>{testimonial.text}</CardText>
            </TestimonialCard>
          </div>
        ))}
      </StyledCarousel>
      <NavigationButton direction="left" icon={<LeftOutlined />} onClick={previous} />
      <NavigationButton direction="right" icon={<RightOutlined />} onClick={next} />
    </Section>
  );
};

const testimonials = [
  {
    title: "Child-Friendly Infrastructure",
    text: "Impeccable facilities and top-notch security system impressed Mrs. Shilpa, making the decision easy for her child.",
    image: parent1,
  },
  {
    title: "Holistic Development",
    text: "Dr. Poonam's son gained exceptional skills, thanks to Mother's Pride's focus on holistic development.",
    image: parent2,
  },
  {
    title: "Welcoming Environment",
    text: "The warm atmosphere at Mother's Pride helped Mrs. Ankita's daughter Aarna become a confident little girl.",
    image: parent3,
  }
];

export default ParentTestimonials;
