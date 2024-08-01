import React from 'react';
import styled from 'styled-components';
import { Typography, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';

// Import principal's image
import principalImage from '../../assets/large.png';

const { Title, Paragraph } = Typography;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const StyledHeading = styled(Title)`
  && {
    color: #4ecdc4;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      font-size: 36px;
    }

    @media (min-width: 1024px) {
      font-size: 42px;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff5f5;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  max-height: 300px;

  @media (min-width: 768px) {
    width: 40%;
    height: auto;
  }
`;

const PrincipalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentSection = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 60%;
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 50px;
  }
`;

const StyledTitle = styled(Title)`
  && {
    color: #ff6b6b;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
      font-size: 22px;
    }
  }
`;

const StyledParagraph = styled(Paragraph)`
  && {
    color: #45b7d1;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
      font-size: 18px;
    }
  }
`;

const ContactButton = styled(Button)`
  && {
    background-color: #ff6b6b;
    border-color: #ff6b6b;
    color: white;
    font-size: 16px;
    height: auto;
    padding: 10px 20px;
    border-radius: 30px;
    align-self: flex-start;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff8e8e;
      border-color: #ff8e8e;
      transform: translateY(-2px);
    }

    .anticon {
      margin-right: 8px;
    }
  }
`;

const PrincipalMessage = () => {
  return (
    <Section>
      <StyledHeading level={2}>Message from Our Principal</StyledHeading>
      <Container>
        <ImageSection>
          <PrincipalImage src={principalImage} alt="Principal" />
        </ImageSection>
        <ContentSection>
          <StyledTitle level={3}>A Warm Welcome to Little Minds Montessori</StyledTitle>
          <StyledParagraph>
            Dear Parents and Little Explorers,
            
            At Little Minds Montessori, we believe in nurturing not just minds, but hearts too. 
            Our school is a magical place where curiosity is celebrated, creativity is encouraged, 
            and every child's unique potential is recognized and cherished.
          </StyledParagraph>
          <StyledParagraph>
            We're committed to creating a joyful learning environment where your little ones can 
            discover, grow, and shine. Our dedicated team of educators is passionate about guiding 
            your children on their exciting journey of early education.
          </StyledParagraph>
          <StyledParagraph>
            We look forward to partnering with you in shaping bright, confident, and happy little minds!
          </StyledParagraph>
          <StyledParagraph>
            Warmly,
            <br />
            <strong>Ms. Asha Sharma</strong>
            <br />
            Principal, Little Minds Montessori
          </StyledParagraph>
          <ContactButton icon={<MailOutlined />}>
            Email the Principal
          </ContactButton>
        </ContentSection>
      </Container>
    </Section>
  );
};

export default PrincipalMessage;