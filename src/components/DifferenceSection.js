import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Row, Col, Modal } from 'antd';
import { motion } from 'framer-motion';

import curriculum from '../assets/different/curriculum.png';
import safe from '../assets/different/safe.png';
import small from '../assets/different/small.png';
import teacher from '../assets/different/teacher.png';

const breakpoints = {
  mobile: '576px',
  tablet: '768px',
  smallDesktop: '992px',
  largeDesktop: '1200px',
};

const SectionWrapper = styled.section`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, #FFF9C4 0%, #FFEB3B 100%);
  overflow: hidden;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px 30px;
  }

  @media (min-width: ${breakpoints.smallDesktop}) {
    padding: 100px 40px;
  }
`;

const Title = styled(motion.h2)`
  font-size: 36px;
  color: #FF5722;
  margin-bottom: 15px;
  font-weight: 700;
  text-shadow: 2px 2px 0px #FFC107;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 44px;
  }

  @media (min-width: ${breakpoints.smallDesktop}) {
    font-size: 52px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 20px;
  color: #4CAF50;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 22px;
  }

  @media (min-width: ${breakpoints.smallDesktop}) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

const FeatureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  border: 3px solid #FFC107;

  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const FeatureIcon = styled(motion.img)`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border: 4px solid #FF9800;
  animation: ${bounce} 2s infinite;

  @media (min-width: ${breakpoints.tablet}) {
    width: 110px;
    height: 110px;
  }

  @media (min-width: ${breakpoints.smallDesktop}) {
    width: 130px;
    height: 130px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  color: #2196F3;
  margin-top: 15px;
  font-weight: 600;
  transition: color 0.3s ease;

  ${FeatureWrapper}:hover & {
    color: #E91E63;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const CloudBackground = styled.div`
  background-image: url('/path-to-cloud-image.png');
  background-repeat: repeat-x;
  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.7;
`;

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 20px;
    overflow: hidden;
    border: 5px solid #FFC107;
  }

  .ant-modal-header {
    background-color: #FF9800;
    border-bottom: none;
    padding: 16px 24px;
  }

  .ant-modal-title {
    color: white;
    font-size: 24px;
    font-weight: 600;
  }

  .ant-modal-body {
    padding: 24px;
    font-size: 18px;
    color: #4CAF50;
    background-color: #FFFDE7;
  }

  .ant-modal-footer {
    border-top: none;
    background-color: #FFFDE7;
  }
`;

const features = [
  { title: "Dedicated Professional Team", image: teacher, description: "Our team consists of highly qualified and experienced educators dedicated to nurturing young minds." },
  { title: "Best Appropriate Curriculum", image: curriculum, description: "We offer a comprehensive, age-appropriate curriculum designed to foster holistic development in children." },
  { title: "Child Friendly Teaching Method", image: small, description: "Our teaching methods are tailored to engage children in fun, interactive learning experiences." },
  { title: "Safe and Stimulating Environment", image: safe, description: "We provide a secure, nurturing environment that encourages exploration and creativity." }
];

const HowAreDifferentSection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const showModal = (feature) => {
    setSelectedFeature(feature);
    setModalVisible(true);
  };

  return (
    <SectionWrapper>
      <Title
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        How are we different?
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Leader in Early Childhood Education
      </Subtitle>
      <Row gutter={[24, 24]} justify="center">
        {features.map((feature, index) => (
          <Col xs={12} sm={12} md={12} lg={6} key={index}>
            <FeatureWrapper
              onClick={() => showModal(feature)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureIcon
                src={feature.image}
                alt={feature.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
              <FeatureTitle>{feature.title}</FeatureTitle>
            </FeatureWrapper>
          </Col>
        ))}
      </Row>
      <CloudBackground />
      <StyledModal
        title={selectedFeature?.title}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
      >
        <p>{selectedFeature?.description}</p>
      </StyledModal>
    </SectionWrapper>
  );
};

export default HowAreDifferentSection;