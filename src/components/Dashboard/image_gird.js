import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import apiClient from '../../repository/apiClient';
import { Play, Users } from 'lucide-react';

const baseUrl = process.env.REACT_APP_baseUrl;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: ${props => props.isLarge ? '400px' : '300px'};
`;

const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  color: white;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const TextCard = styled(Card)`
  background-color: #2c3e50;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
`;

const InspirationGrid = () => {
  const [inspirations, setInspirations] = useState([]);
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
    apiClient.delete(`/admin/galery/image/delete/${id}`)
      .then(() => {
        setInspirations(inspirations.filter(inspiration => inspiration.id !== id));
      })
      .catch((error) => {
        alert('Error deleting inspiration');
      });
  };

  return (
    <Grid>
      {inspirations.map((inspiration, index) => (
        <Card key={inspiration.id} isLarge={index === 0 || index === 6}>
          
            <ImageWrapper>
              <Image src={baseUrl + inspiration.filepath} alt={inspiration.name} />
              <RemoveButton onClick={() => handleRemove(inspiration.id)}>✖</RemoveButton>
            </ImageWrapper>
        
        </Card>
      ))}
    </Grid>
  );
};

export default InspirationGrid;