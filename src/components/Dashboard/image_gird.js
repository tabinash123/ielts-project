import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Play, Users, X, Maximize2, ChevronLeft } from 'lucide-react';
import apiClient from '../../repository/apiClient';

const baseUrl = process.env.REACT_APP_baseUrl;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #2c3e50;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #3498db;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  justify-content: center;
`;

const Card = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const ActionButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  opacity: 0;

  ${Card}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: scale(1.1);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const InspirationGrid = () => {
  const [inspirations, setInspirations] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const { url } = useParams();

  useEffect(() => {
    apiClient.get(`/open/gallery/images/${url}`)
      .then((response) => {
        setInspirations(response.data.data);
      })
      .catch((error) => {
        alert('Error fetching inspirations');
      });
  }, [url]);

  const handleRemove = (id) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      apiClient.delete(`/admin/galery/image/delete/${id}`)
        .then(() => {
          setInspirations(inspirations.filter(inspiration => inspiration.id !== id));
        })
        .catch((error) => {
          alert('Error deleting inspiration');
        });
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <PageContainer>
      <Header>
        <Title> Gallery</Title>
        <BackButton onClick={() => window.history.back()}>
          <ChevronLeft size={20} />
          Back to Galleries
        </BackButton>
      </Header>
      <Grid>
        {inspirations.map((inspiration) => (
          <Card key={inspiration.id}>
            <ImageWrapper>
              <Image src={baseUrl + inspiration.filepath} alt={inspiration.name} />
              <Overlay>
                <CardTitle>{inspiration.name}</CardTitle>
                <IconGroup>
                  <IconWrapper>
                    <Play size={12} />
                    {inspiration.views || 0}
                  </IconWrapper>
                  <IconWrapper>
                    <Users size={12} />
                    {inspiration.likes || 0}
                  </IconWrapper>
                </IconGroup>
              </Overlay>
              <ActionButton onClick={() => openModal(inspiration)}>
                <Maximize2 size={14} />
              </ActionButton>
              <ActionButton 
                onClick={() => handleRemove(inspiration.id)} 
                style={{ right: 40, backgroundColor: 'rgba(231, 76, 60, 0.9)' }}
              >
                <X size={14} color="white" />
              </ActionButton>
            </ImageWrapper>
          </Card>
        ))}
      </Grid>
      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <X size={24} />
            </CloseButton>
            <ModalImage src={baseUrl + selectedImage.filepath} alt={selectedImage.name} />
          </ModalContent>
        </Modal>
      )}
    </PageContainer>
  );
};

export default InspirationGrid;