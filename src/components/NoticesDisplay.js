import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Download } from 'lucide-react';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 15px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #FF6F00;
  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const NoticeList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const NoticeItem = styled(motion.li)`
  background-color: #ffffff;
  border: 1px solid #ecf0f1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const NoticeContent = styled.div`
  padding: 15px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const NoticeTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.1rem;
  color: #34495e;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const NoticeThumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ecf0f1;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ActionButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #2980b9;
  }

  svg {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.8rem;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(motion.div)`
  background-color: #fefefe;
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    max-width: 95%;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 95%;
    max-height: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #34495e;

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const NoticeImage = styled.img`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 4px;
  margin-top: 1rem;

  @media (max-width: 768px) {
    max-height: 60vh;
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

const NoticesDisplay = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('https://backend.businessitpartners.website/MONTESSORY_RAMESH/open/notices/all');
      if (response.data.success) {
        setNotices(response.data.data);
      } else {
        throw new Error('Failed to fetch notices');
      }
    } catch (err) {
      setError('Error fetching notices. Please try again later.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (notice) => setSelectedNotice(notice);
  const closeModal = () => setSelectedNotice(null);

  const downloadImage = (imageUrl, title) => {
    const link = document.createElement('a');
    link.href = `https://backend.businessitpartners.website${imageUrl}`;
    link.download = `${title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Container>{error}</Container>;

  return (
    <Container>
      <Title>Notices</Title>
      <NoticeList>
        {notices.map((notice) => (
          <NoticeItem
            key={notice.id}
            whileHover={{ y: -5 }}
          >
            <NoticeThumbnail
              src={`https://backend.businessitpartners.website${notice.filepath}`}
              alt={notice.title}
            />
            <NoticeContent>
              <NoticeTitle>{notice.title}</NoticeTitle>
              <ActionButton onClick={() => openModal(notice)}>
                <Eye size={18} />
                View Notice
              </ActionButton>
            </NoticeContent>
          </NoticeItem>
        ))}
      </NoticeList>
      <AnimatePresence>
        {selectedNotice && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <CloseButton onClick={closeModal}>
                <X size={24} />
              </CloseButton>
              <h2>{selectedNotice.title}</h2>
              <NoticeImage 
                src={`https://backend.businessitpartners.website${selectedNotice.filepath}`} 
                alt={selectedNotice.title} 
              />
              <ActionButton 
                onClick={() => downloadImage(selectedNotice.filepath, selectedNotice.title)}
                style={{ marginTop: '1rem' }}
              >
                <Download size={18} />
                Download Notice
              </ActionButton>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default NoticesDisplay;