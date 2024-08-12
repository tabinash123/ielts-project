import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import myVideo from '../assets/Wildlife of Nepal.mp4';

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  width: 100%;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 40px 10%;
  color: #fff;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 30px 7%;
  }

  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const SubHeader = styled(motion.h2)`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 4px;
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: 6rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #ffffff, #c9a73b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1024px) {
    font-size: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Lato', sans-serif;
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: #c9a73b;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  padding: 12px 30px;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #b08f2d;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 25px;
  }
`;

const BookingBar = styled(motion.div)`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  
  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 0;
  }
`;

const BookingInput = styled.input`
  margin: 0 10px;
  padding: 12px;
  font-family: 'Lato', sans-serif;
  border: 1px solid #ccc;
  font-size: 1rem;
  
  @media (max-width: 1024px) {
    margin: 5px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 5px 0;
  }
`;

const BookNowButton = styled.button`
  background-color: #c9a73b;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding: 12px 25px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: #b08f2d;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    margin-top: 10px;
  }
`;

const HeroComponent = () => {
  return (
    <HeroSection>
      <VideoBackground autoPlay loop muted playsInline>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Overlay />
      <ContentWrapper>
        <SubHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Welcome to Luxury
        </SubHeader>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Chitwan Serenity Resort
        </Title>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          Immerse yourself in unparalleled luxury at the edge of Chitwan National Park. 
          Experience world-class hospitality amidst Nepal's stunning wilderness.
        </Description>
        <CTAButton
          href="#book-now"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          Explore Our Suites
        </CTAButton>
        {/* <BookingBar
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          <BookingInput type="date" placeholder="Check-in Date" />
          <BookingInput type="date" placeholder="Check-out Date" />
          <BookingInput type="number" placeholder="Guests" min="1" max="10" />
          <BookNowButton>Book Now</BookNowButton>
        </BookingBar> */}
      </ContentWrapper>
    </HeroSection>
  );
};

export default HeroComponent;