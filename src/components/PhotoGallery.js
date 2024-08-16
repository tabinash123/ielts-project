import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/gallary/1.jpg';
import img2 from '../assets/gallary/2.jpg';
import img3 from '../assets/gallary/3.jpg';
import img4 from '../assets/gallary/4.jpg';
import img5 from '../assets/gallary/5.jpg';
import img6 from '../assets/gallary/6.jpg';
import img7 from '../assets/gallary/7.jpg';
import img8 from '../assets/gallary/8.jpg';
import img9 from '../assets/gallary/9.jpg';
import img10 from '../assets/gallary/10.jpg';

const GallerySection = styled.section`
  padding: 40px 20px;

  @media (min-width: 768px) {
    padding: 50px 30px;
  }

  @media (min-width: 1024px) {
    padding: 60px 40px;
  }
`;

const GalleryTitle = styled.h2`
  color: #FF6F00;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  font-weight: 700;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #FF9800, transparent);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 25px;
  }
`;

const GalleryImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GalleryImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const Gallery = () => {
  const images = [
    { src: img1, alt: "Children playing" },
    { src: img2, alt: "Art activity" },
    { src: img3, alt: "Outdoor playtime" },
    { src: img4, alt: "Story time" },
    { src: img5, alt: "Music class" },
    { src: img6, alt: "Mealtime" },
    { src: img7, alt: "Nap time" },
    { src: img8, alt: "Science experiment" },
    { src: img9, alt: "Physical activity" },
    { src: img10, alt: "Group activity" },
  ];

  return (
    <GallerySection>
      <GalleryTitle>Our Kindergarten in Action</GalleryTitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryImageWrapper key={index}>
            <GalleryImage src={image.src} alt={image.alt} />
          </GalleryImageWrapper>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
};

export default Gallery;