import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Facebook, Twitter, Instagram } from 'lucide-react';

// Import images
import img1 from "../../assets/gallary/1.png";
import img2 from "../../assets/gallary/2.png";
import img3 from "../../assets/gallary/3.png";
import img4 from "../../assets/gallary/4.png";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SectionContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 15px;
  background-color: #faf7f2;
  font-family: 'Poppins', Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }

  @media (min-width: 1024px) {
    padding: 60px 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
  animation: ${fadeIn} 0.6s ease-out;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

const MainTitle = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding: 15px 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 20px 0;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out 0.4s both;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    height: 250px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  transition: transform 0.3s ease;

  ${TeamMember}:hover & {
    transform: scale(1.1);
  }
`;

const MemberInfo = styled.div`
  padding: 15px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

const MemberName = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const MemberRole = styled.p`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

const SocialIcon = styled.a`
  color: #999;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #333;
    transform: translateY(-3px);
  }
`;

const TeamSection = () => {
  const teamMembers = [
    { name: 'Jeffery Mussman', role: 'Founder & CEO', image: img1 },
    { name: 'Sophia Jenkins', role: 'Founder & CEO', image: img2 },
    { name: 'Ethan Reynolds', role: 'Founder & CEO', image: img3 },
    { name: 'Noah Anderson', role: 'Founder & CEO', image: img4 },
  ];

  return (
    <SectionContainer>
      <SectionTitle>Behind the Scene</SectionTitle>
      <MainTitle>Our Team</MainTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <ImageContainer>
              <MemberImage src={member.image} alt={member.name} />
            </ImageContainer>
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberRole>{member.role}</MemberRole>
              
            </MemberInfo>
          </TeamMember>
        ))}
      </TeamGrid>
    </SectionContainer>
  );
};

export default TeamSection;