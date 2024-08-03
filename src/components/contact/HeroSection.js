import React from 'react';
import styled from 'styled-components';
import image from '../../assets/parents/parent2.jpg'


const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImage src={image} alt="Hero Image" />
      <HeroContent>
        <HeroTitle>Your Montesori</HeroTitle>
        <HeroSubtitle>From the heart of chitwan</HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px; // Adjust this value as needed
  overflow: hidden;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export default HeroSection;