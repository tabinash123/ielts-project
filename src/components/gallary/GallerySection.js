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
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const IntroSection = styled.div`
  text-align: left;
  margin-bottom: 3rem;
`;

const IntroTitle = styled.h2`
  font-size: 2.5rem;
  color: #8B4513;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const IntroDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 800px;
`;

const GalleryTitle = styled.h3`
  font-size: 2rem;
  color: #8B4513;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  // aspect-ratio: 3 / 2;
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryImageWrapper}:hover & {
    opacity: 1;
  }
`;

const OverlayText = styled.span`
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
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
  { src: img1, alt: 'Hotel exterior at night' },
  { src: img2, alt: 'Luxurious bedroom' },
  { src: img3, alt: 'Swimming pool at night' },
  { src: img4, alt: 'Garden gazebo' },
  { src: img5, alt: 'Hotel pathway' },
  { src: img6, alt: 'Hotel building at night' },
  { src: img7, alt: 'Hotel building at night' },
  { src: img8, alt: 'Hotel building at night' },
  { src: img9, alt: 'Hotel building at night' },
  { src: img10, alt: 'Hotel building at night' },
  { src: img11, alt: 'Hotel building at night' },
  { src: img12, alt: 'Hotel building at night' },
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
          <IntroTitle>Explore Our Visual Journey</IntroTitle>
          <IntroDescription>
            Immerse yourself in the beauty and elegance of our hotel through our carefully curated gallery. 
            From stunning exterior views to luxurious rooms and top-notch amenities, each image 
            tells a story of comfort, style, and unforgettable experiences. Let our visual narrative 
            inspire your next stay with us and showcase the exceptional quality we offer at every turn.
          </IntroDescription>
        </IntroSection>

        <GalleryTitle>
          <ImageIcon size={32} color="#8B4513" style={{ marginRight: '0.5rem' }} />
          Our Gallery
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
              <GalleryImage
                src={image.src}
                alt={image.alt}
              />

            </GalleryImageWrapper>
          ))}
        </GalleryGrid>
        
      </GalleryContainer>
    </GallerySection>
  );
};

export default Gallery;