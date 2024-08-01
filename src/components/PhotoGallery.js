import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { CalendarOutlined, RightOutlined } from '@ant-design/icons';
import img1 from '../assets/gallary/1.png';
import img2 from '../assets/gallary/2.png';
import img3 from '../assets/gallary/3.png';
import img4 from '../assets/gallary/4.png';
import img5 from '../assets/gallary/5.png';
import img6 from '../assets/gallary/6.png';
import img7 from '../assets/gallary/7.png';
import img8 from '../assets/gallary/8.png';
import img9 from '../assets/gallary/9.png';
import img10 from '../assets/gallary/10.png';

const GallerySection = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  .anticon {
    color: #ff4d4f;
    margin-right: 10px;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: 150px;
  gap: 10px;
  margin-bottom: 20px;
`;

const ImageBox = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ViewMoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 10px;
`;

const ViewMoreButton = styled(Button)`
  color: #ff4d4f;
  font-weight: bold;
  &:hover {
    color: #d83436;
  }
`;

const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px;
  ${props => props.position}: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const PhotoGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

  return (
    <GallerySection>
      <Title>
        <CalendarOutlined /> PHOTO GALLERY
      </Title>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageBox key={index}>
            <img src={image} alt={`Gallery Image ${index + 1}`} loading="lazy" />
          </ImageBox>
        ))}
        <ViewMoreBox>
          <ViewMoreButton type="link" icon={<RightOutlined />}>
            VIEW MORE
          </ViewMoreButton>
        </ViewMoreBox>
      </ImageGrid>
      <FloatingButton position="left" color="#25D366">
        {/* WhatsApp icon */}
      </FloatingButton>
      <FloatingButton position="right" color="#007bff">
        {/* Phone icon */}
      </FloatingButton>
    </GallerySection>
  );
};

export default PhotoGallery;
