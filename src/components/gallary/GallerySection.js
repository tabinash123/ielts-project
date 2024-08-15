import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from "../../assets/gallary/1.jpg";
import img2 from "../../assets/gallary/2.jpg";
import img3 from "../../assets/gallary/3.jpg";
import img4 from "../../assets/gallary/4.jpg";
import img5 from "../../assets/gallary/5.jpg";
import img6 from "../../assets/gallary/6.jpg";
import img7 from "../../assets/gallary/7.jpg";
import img8 from "../../assets/gallary/8.jpg";
import img9 from "../../assets/gallary/9.jpg";
import img10 from "../../assets/gallary/10.jpg";
import img11 from "../../assets/gallary/11.jpg";
import img12 from "../../assets/gallary/12.jpg";

const GallerySection = styled.section`
  padding: 60px 20px;
  background-color: #FFF9C4;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 70px 30px;
  }

  @media (min-width: 1024px) {
    padding: 80px 40px;
  }
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const IntroTitle = styled.h2`
  color: #424242;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  display: inline-block;

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
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(to right, #FF9800, transparent);
  }
`;

const IntroDescription = styled.p`
  color: #616161;
  font-size: 0.9rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 0.95rem;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

const GalleryTitle = styled.h3`
  color: #FF9800;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const LightboxButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const CloseButton = styled(LightboxButton)`
  top: 1rem;
  right: 1rem;
`;

const PrevButton = styled(LightboxButton)`
  left: 1rem;
`;

const NextButton = styled(LightboxButton)`
  right: 1rem;
`;

const galleryImages = [
  { src: img1, alt: 'Classroom activity' },
  { src: img2, alt: 'Children playing' },
  { src: img3, alt: 'Art session' },
  { src: img4, alt: 'Outdoor playtime' },
  { src: img5, alt: 'Reading corner' },
  { src: img6, alt: 'Music class' },
  { src: img7, alt: 'Science experiment' },
  { src: img8, alt: 'Group activity' },
  { src: img9, alt: 'Montessori materials' },
  { src: img10, alt: 'Snack time' },
  { src: img11, alt: 'Parent-teacher meeting' },
  { src: img12, alt: 'School event' },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    setLightboxIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return galleryImages.length - 1;
      if (newIndex >= galleryImages.length) return 0;
      return newIndex;
    });
  }, []);

  return (
    <GallerySection>
      <GalleryContainer>
        <IntroSection>
          <IntroTitle>Our Visual Journey</IntroTitle>
          <IntroDescription>
            Explore the vibrant world of Sungava Balsansar Montessori School through our gallery. 
            These images capture the essence of our nurturing environment, engaging activities, 
            and the joy of learning that defines our children's daily experiences.
          </IntroDescription>
        </IntroSection>

        <GalleryTitle>
          <ImageIcon size={24} color="#FF9800" style={{ marginRight: '0.5rem' }} />
          School Gallery
        </GalleryTitle>
        <GalleryGrid>
          {galleryImages.map((image, index) => (
            <GalleryImageWrapper 
              key={index}
              onClick={() => openLightbox(index)}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View larger image of ${image.alt}`}
            >
              <GalleryImage src={image.src} alt={image.alt} />
            </GalleryImageWrapper>
          ))}
        </GalleryGrid>
        
        {lightboxIndex !== null && (
          <LightboxOverlay>
            <LightboxImage src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].alt} />
            <CloseButton onClick={closeLightbox}><X /></CloseButton>
            <PrevButton onClick={() => navigateLightbox(-1)}><ChevronLeft /></PrevButton>
            <NextButton onClick={() => navigateLightbox(1)}><ChevronRight /></NextButton>
          </LightboxOverlay>
        )}
      </GalleryContainer>
    </GallerySection>
  );
};

export default Gallery;