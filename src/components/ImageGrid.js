import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImageItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
  text-align: center;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ImageItem}:hover & {
    transform: translateY(0);
  }
`;

const ImageGrid = ({ images, baseUrl }) => {
    console.log(baseUrl);
  return (
    <GridContainer>
      {images.map((image) => (
        <ImageItem key={image.id}>
          <Image 
            src={`${baseUrl}${image.filepath}`} 
            alt={image.name} 
          />
          <ImageCaption>{image.name}</ImageCaption>
        </ImageItem>
      ))}
    </GridContainer>
  );
};

export default ImageGrid;