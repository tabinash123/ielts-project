import React from 'react';
import styled from 'styled-components';
import { Steps, Button, Collapse } from 'antd';
import { UserOutlined, FileTextOutlined, TeamOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { Panel } = Collapse;

const AdmissionsContainer = styled.div`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #666;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
`;

const StyledSteps = styled(Steps)`
  margin-bottom: 60px;

  .ant-steps-item-icon {
    background-color: #ff1493;
    border-color: #ff1493;
  }

  .ant-steps-item-title {
    font-size: 18px;
  }

  .ant-steps-item-description {
    font-size: 14px;
    max-width: 200px;
  }
`;

const ApplyButton = styled(Button)`
  display: block;
  margin: 40px auto;
  height: 50px;
  font-size: 18px;
  background-color: #ff1493;
  border-color: #ff1493;
  &:hover, &:focus {
    background-color: #ff69b4;
    border-color: #ff69b4;
  }
`;

const FAQSection = styled.div`
  margin-top: 60px;
`;

const FAQTitle = styled.h2`
  font-size: 36px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

const StyledCollapse = styled(Collapse)`
  background-color: #fff;

  .ant-collapse-item {
    border-bottom: 1px solid #f0f0f0;
  }

  .ant-collapse-header {
    font-size: 18px;
    color: #333;
  }

  .ant-collapse-content-box {
    font-size: 16px;
    color: #666;
  }
`;

const Admissions = () => {
  const admissionSteps = [
    {
      title: 'Inquire',
      description: 'Contact us to learn more about our programs and availability.',
      icon: <UserOutlined />
    },
    {
      title: 'Apply',
      description: 'Complete the online application form and pay the application fee.',
      icon: <FileTextOutlined />
    },
    {
      title: 'Visit',
      description: 'Schedule a tour and meet with our admissions team.',
      icon: <TeamOutlined />
    },
    {
      title: 'Enroll',
      description: 'Accept your offer and complete the enrollment process.',
      icon: <CheckCircleOutlined />
    }
  ];

  return (
    <AdmissionsContainer>
      <Title>Admissions</Title>
      <Subtitle>
        Join our vibrant learning community! We're excited to welcome new families and guide you through our admissions process.
      </Subtitle>

      <StyledSteps>
        {admissionSteps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </StyledSteps>

      <ApplyButton type="primary" size="large">
        Apply Now
      </ApplyButton>

    
    </AdmissionsContainer>
  );
};

export default Admissions;