import React from 'react';
import { Layout, Row, Col, Button } from 'antd';
import styled from 'styled-components';
import { RocketOutlined, FundProjectionScreenOutlined } from '@ant-design/icons';

const { Content } = Layout;

const Section = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const Intro = styled.div`
  color: #e31b6d;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #002e6e;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background: #fff;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  margin: 10px 0;
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #e31b6d;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  color: #002e6e;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const ExperienceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

const ExperienceImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
`;

const ExperienceText = styled.h3`
  font-size: 18px;
  color: #002e6e;
  margin: 0;
`;

const CustomButton = styled.button`
  background-color: #e31b6d;
  color: #fff;
  border: none;
  padding: 0 30px;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  &:hover {
    background-color: #002e6e;
  }
`;

function App() {
  return (
    <Layout>
      <Content>
        <Section>
          <Intro>OUR COMPANY INTRO</Intro>
          <Title>Obtaining An Immigration Visa The Best Advice</Title>
          <Description>
            Many variations of the snippets are available, but most have been altered in some way by including random, non-random words.
          </Description>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} md={8}>
              <Card>
                <IconWrapper>
                  <RocketOutlined />
                </IconWrapper>
                <CardTitle>Our Mission</CardTitle>
                <CardDescription>Enhancing every kind of opportunity</CardDescription>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <IconWrapper>
                  <FundProjectionScreenOutlined />
                </IconWrapper>
                <CardTitle>Our Vision</CardTitle>
                <CardDescription>Quick solutions & solve issues quickly</CardDescription>
              </Card>
            </Col>
          </Row>
          <ExperienceWrapper>
            <ExperienceImage src="experience-image.jpg" alt="Experience" />
            <ExperienceText>Over 25 years of visa and immigration service experience.</ExperienceText>
          </ExperienceWrapper>
          <CustomButton>ABOUT MORE</CustomButton>
        </Section>
      </Content>
    </Layout>
  );
}

export default App;
