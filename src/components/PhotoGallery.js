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
    background-color: #f2e6fe;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 30px;
  }

  @media (min-width: 1024px) {
    padding: 40px;
  }
`;

const GalleryTitle = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 20px;
  color: #000000;
  text-transform: uppercase;
  
  @media (max-width: 480px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 32px;
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
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Gallery = () => {
  const images = [
    { src: img1, alt: "Tattooing" },
    { src: img2, alt: "Tattooing" },
    { src: img3, alt: "Piercing" },
    { src: img4, alt: "Consultation" },
    { src: img5, alt: "Tribal" },
    { src: img6, alt: "Modification" },
    { src: img7, alt: "Design" },
    { src: img8, alt: "Design" },
    { src: img9, alt: "Modification" },
    { src: img10, alt: "Design" },
  ];

  return (
    <GallerySection>
      <GalleryTitle>Gallery</GalleryTitle>
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