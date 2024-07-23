import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { UserOutlined, RocketOutlined, SmileOutlined } from '@ant-design/icons';

const SectionWrapper = styled.section`
  padding: 60px 0;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 90px;
`;

const MissionText = styled.h4`
  color: #e91e63;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  color: #003366;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const FeatureCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 30px;
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 60px;
  color: #e0c555;
  margin: 0 auto 20px;
`;

const FeatureTitle = styled.h3`
  color: #003366;
  font-size: 20px;
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
`;

const WhyChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: <UserOutlined />,
      title: 'In-Person Interviews',
      description: 'Our customers can always count on skilled professionals to provide Best To Best services.'
    },
    {
      icon: <RocketOutlined />,
      title: 'Accelerated Processing',
      description: 'Our customers can always count on skilled professionals to provide Best To Best services.'
    },
    {
      icon: <SmileOutlined />,
      title: 'Customers Rely',
      description: 'Our customers can always count on skilled professionals to provide Best To Best services.'
    }
  ];

  return (
    <SectionWrapper>
      <MissionText>OUR MISSION</MissionText>
      <Title>Why Choose Us</Title>
      <Row gutter={[24, 24]}>
        {features.map((feature, index) => (
          <Col xs={24} md={8} key={index}>
            <FeatureCard
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Icon>
                {feature.icon}
              </Icon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          </Col>
        ))}
      </Row>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
