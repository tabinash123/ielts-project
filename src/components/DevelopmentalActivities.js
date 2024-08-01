import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import art from '../assets/art.png';
import circle from '../assets/circle.png';
import hand from '../assets/hand.png';
import large from '../assets/large.png';
import meal from '../assets/meal.png';
import music from '../assets/music.png';
import nap from '../assets/nap.png';
import role from '../assets/role.png';
import small from '../assets/small.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ActivitiesSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #333;
  animation: ${fadeIn} 0.8s ease-out;

  span {
    color: #FF8C00;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.6;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ActivitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ActivityCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  animation: ${fadeIn} 0.8s ease-out ${props => props.index * 0.1}s backwards;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ActivityImage = styled.div`
  width: 100%;
  padding-top: 75%; // 4:3 aspect ratio
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
  position: relative;

  ${ActivityCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ActivityCard}:hover & {
    opacity: 1;
  }
`;

const ActivityTitle = styled.h3`
  font-size: 16px;
  color: #fff;
  padding: 10px;
  margin: 0;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  transition: background 0.3s ease;

  ${ActivityCard}:hover & {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const activities = [
  { title: 'Circle Time', imgUrl: circle },
  { title: 'Hands on Activities', imgUrl: hand },
  { title: 'Art Activities', imgUrl: art },
  { title: 'Story Time', imgUrl: large },
  { title: 'Music & Movement', imgUrl: music },
  { title: 'Role Play & Drama', imgUrl: role },
  { title: 'Large Group Time', imgUrl: large },
  { title: 'Small Group Time', imgUrl: small },
  { title: 'Meal Time', imgUrl: meal },
  { title: 'Nap Time', imgUrl: nap },
];

const DevelopmentalActivities = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <ActivitiesSection>
      <Title><span>Developmental</span> Activities</Title>
      <Subtitle>
        Our learning zones have a mix of structured and unstructured play and include activities that
        encourage children to think outside the box.
      </Subtitle>
      <ActivitiesGrid>
        {activities.map((activity, index) => (
          <ActivityCard 
            key={index} 
            index={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ActivityImage imgUrl={activity.imgUrl}>
              <ImageOverlay />
              <ActivityTitle>{activity.title}</ActivityTitle>
            </ActivityImage>
          </ActivityCard>
        ))}
      </ActivitiesGrid>
    </ActivitiesSection>
  );
};

export default DevelopmentalActivities;
