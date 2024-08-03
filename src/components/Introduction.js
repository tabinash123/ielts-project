import styled from 'styled-components';
import About from '../assets/gallary/10.png';

const AboutSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (min-width: 769px) {
    padding: 60px 20px;
  }

  @media (min-width: 1025px) {
    padding: 80px 20px;
  }
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333;
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    font-size: 32px;
    margin-bottom: 35px;
  }

  @media (min-width: 1025px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    flex: 1;
    padding-right: 20px;
    margin-bottom: 0;
  }

  @media (min-width: 1025px) {
    padding-right: 40px;
  }
`;

const Subtitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;

  @media (min-width: 769px) {
    font-size: 22px;
    margin-bottom: 18px;
  }

  @media (min-width: 1025px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;

  @media (min-width: 1025px) {
    margin-bottom: 20px;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  @media (min-width: 769px) {
    margin-top: 25px;
  }

  @media (min-width: 1025px) {
    margin-top: 30px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 28px;
  color: #f0a500;
  font-weight: bold;

  @media (min-width: 769px) {
    font-size: 32px;
  }

  @media (min-width: 1025px) {
    font-size: 36px;
  }
`;

const StatLabel = styled.div`
  color: #666;
  font-size: 12px;

  @media (min-width: 769px) {
    font-size: 13px;
  }

  @media (min-width: 1025px) {
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;

  @media (min-width: 769px) {
    flex: none;
    width: 45%;
    height: 300px;
  }

  @media (min-width: 1025px) {
    width: 500px;
    height: 350px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 6px solid #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1025px) {
    border-width: 8px;
  }
`;

const AboutUs = () => (
  <AboutSection>
    <Title>About Us</Title>
    <ContentWrapper>
      <TextContent>
        <Subtitle>We are a professional team of tattoists</Subtitle>
        <Description>
          Our tattoo salon is a home for talented tattoo artists ready to turn your body into 
          a canvas with beautiful pictures on it.
        </Description>
        <Description>
          To get your body inked in our tattoo salon, you may contact us via contact form 
          on our website, or by phone. We welcome appointments, as well as walk-ins. We 
          have gathered the best team of tattoo artists who work full time in our salon, and 
          we have fantastic guest artists visiting our shop.
        </Description>
        <Stats>
          <StatItem>
            <StatNumber>8600</StatNumber>
            <StatLabel>Reviews</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>1580</StatNumber>
            <StatLabel>Tattoos</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>975</StatNumber>
            <StatLabel>Happy Clients</StatLabel>
          </StatItem>
        </Stats>
      </TextContent>
      <ImageWrapper>
        <Image src={About} alt="Tattoo artist at work" />
      </ImageWrapper>
    </ContentWrapper>
  </AboutSection>
);

export default AboutUs;