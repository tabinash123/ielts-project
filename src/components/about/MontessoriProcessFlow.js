import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Timeline, Carousel } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const StoryContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const Hero = styled.div`
  height: 100vh;
  background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/path-to-your-hero-image.jpg') center/cover no-repeat;
    opacity: 0.2;
    animation: ${fadeIn} 2s ease-out;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  animation: ${slideIn} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 72px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
`;

const Subtitle = styled.p`
  font-size: 24px;
  max-width: 600px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
`;

const Section = styled.section`
  padding: 100px 0;
  background-color: ${props => props.bgColor || 'white'};
  color: ${props => props.textColor || '#333'};
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 50px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #FF6B6B, #4ECDC4);
  }
`;

const StoryContent = styled.p`
  font-size: 20px;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 30px;
  text-align: center;
`;

const StyledTimeline = styled(Timeline)`
  max-width: 800px;
  margin: 0 auto;

  .ant-timeline-item-head {
    background-color: #FF6B6B;
  }

  .ant-timeline-item-content {
    font-size: 18px;
  }
`;

const MissionSection = styled(Section)`
  background: linear-gradient(45deg, #4ECDC4, #45B7D1);
  color: white;
`;

const MissionStatement = styled.p`
  font-size: 28px;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
`;

const StyledCarousel = styled(Carousel)`
  max-width: 800px;
  margin: 0 auto;

  .slick-slide {
    text-align: center;
    background: #F7F7F7;
    border-radius: 10px;
    padding: 40px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  h3 {
    font-size: 24px;
    color: #FF6B6B;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #333;
  }
`;

const OurStory = () => {
  return (
    <StoryContainer>
     
      <Section>
        <SectionTitle>The Mother's Pride Story</SectionTitle>
        <StoryContent>
          Mother's Pride began with a vision to create a nurturing environment where every child's potential could blossom. Founded by Sarah Johnson, a passionate educator, our preschool has grown from a small classroom of 10 children to a thriving community of learners.
        </StoryContent>
        <StoryContent>
          Over the years, we've remained committed to our core values of compassion, creativity, and excellence in early childhood education. Our journey has been marked by continuous innovation in our teaching methods and unwavering dedication to the well-being of each child.
        </StoryContent>
      </Section>

      <Section bgColor="#F7F7F7">
        <SectionTitle>Our Milestones</SectionTitle>
        <StyledTimeline mode="alternate">
          <Timeline.Item>1995: Mother's Pride opens its doors</Timeline.Item>
          <Timeline.Item color="#4ECDC4">2000: Expanded to include kindergarten program</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            2005: Introduced innovative STEAM curriculum
          </Timeline.Item>
          <Timeline.Item color="#FF6B6B">2010: Opened second location</Timeline.Item>
          <Timeline.Item>2015: Celebrated 20 years of excellence</Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
            2020: Launched virtual learning program
          </Timeline.Item>
        </StyledTimeline>
      </Section>

      
    </StoryContainer>
  );
};

export default OurStory;