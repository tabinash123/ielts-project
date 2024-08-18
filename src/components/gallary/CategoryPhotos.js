import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const PhotoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 10px;
  }
`;

const PhotoCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 6px;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 140px;
  }
`;

const BackButton = styled(motion.button)`
  margin-bottom: 20px;
  padding: 12px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
    font-size: 0.9rem;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    border-width: 3px;
  }
`;

const LightboxOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;

const CategoryTitle = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CategoryPhotos = ({ url, onBack }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`https://backend.businessitpartners.website/MONTESSORY_RAMESH/open/gallery/images/${url}`);
        if (response.data.success) {
          setPhotos(response.data.data);
        } else {
          throw new Error('Failed to fetch photos');
        }
      } catch (err) {
        setError('Error fetching photos. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [url]);

  const openLightbox = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <BackButton onClick={onBack}>
        <ArrowLeft size={20} style={{ marginRight: '10px' }} />
        Back to Categories
      </BackButton>
      <CategoryTitle>{photos[0]?.name || 'Category Photos'}</CategoryTitle>
      <PhotoGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            onClick={() => openLightbox(photo)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Photo 
              src={`https://backend.businessitpartners.website${photo.filepath}`} 
              alt={photo.name} 
            />
          </PhotoCard>
        ))}
      </PhotoGrid>
      <AnimatePresence>
        {selectedPhoto && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <LightboxImage 
              src={`https://backend.businessitpartners.website${selectedPhoto.filepath}`} 
              alt={selectedPhoto.name} 
            />
            <CloseButton onClick={closeLightbox}>
              <X size={24} />
            </CloseButton>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default CategoryPhotos;