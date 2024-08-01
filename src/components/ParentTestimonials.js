import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { LeftOutlined, RightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
  
  span {
    color: #ff4081;
  }
`;

const TestimonialCard = styled.div`
  text-align: left;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 140px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff4081, #ff9100);
    opacity: 0.3;
  }
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
    transform: translateY(-2px);
  }
  
  .anticon {
    margin-right: 6px;
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
  
  &:hover {
    background-color: #ff4081;
    color: #fff;
  }
`;

const ParentTestimonials = () => {
  return (
    <Section>
      <Title>What Parents Say <span>♥</span></Title>
      <Row gutter={[24, 24]}>
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <TestimonialCard>
              <ImagePlaceholder />
              <CardTitle>{testimonial.title}</CardTitle>
              <CardText>{testimonial.text}</CardText>
              <ViewButton icon={<PlayCircleOutlined />}>
                Watch Video
              </ViewButton>
            </TestimonialCard>
          </Col>
        ))}
      </Row>
      {/* <NavigationButton direction="left" icon={<LeftOutlined />} />
      <NavigationButton direction="right" icon={<RightOutlined />} /> */}
    </Section>
  );
};

const testimonials = [
  {
    title: "Child-Friendly Infrastructure",
    text: "Impeccable facilities and top-notch security system impressed Mrs. Shilpa, making the decision easy for her child."
  },
  {
    title: "Holistic Development",
    text: "Dr. Poonam's son gained exceptional skills, thanks to Mother's Pride's focus on holistic development."
  },
  {
    title: "Welcoming Environment",
    text: "The warm atmosphere at Mother's Pride helped Mrs. Ankita's daughter Aarna become a confident little girl."
  }
];

export default ParentTestimonials;