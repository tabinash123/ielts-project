import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Folder, Link2, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import apiClient from '../../repository/apiClient';
import { Link } from 'react-router-dom';


const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80"><path d="M0 0h80v80H0z" fill="none"/><path d="M0 80V0l20 20L0 80zm21 0V20l20 20-20 40zm21 0V40l20 20-20 20zm21 0V60l17 17v3H63z" fill="%23FF9800" opacity="0.1"/></svg>') repeat;
    opacity: 0.1;
    z-index: 0;
  }

`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #FF6F00;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;

`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;


`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CategoryName = styled.h2`
  font-size: 1.5rem;
  color: #FF6F00;
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4A4A4A;

  svg {
    margin-right: 0.5rem;
    color: #4CAF50;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #4A4A4A;
  margin-top: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: #e74c3c;
  margin-top: 2rem;
`;

const CategoryImagesContainer = styled.div`
  margin-top: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 2rem;
  color: #FF6F00;
  margin-bottom: 1rem;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const GridImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;


`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #FF6F00;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;

  

  svg {
    margin-right: 0.5rem;
  }
`;

const ImageViewer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1100;
`;

const LargeImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;


`;

const PrevButton = styled(NavButton)`
  left: 20px;
`;

const NextButton = styled(NavButton)`
  right: 20px;
`;

const CategoryImages = ({ category, images, onBack }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const baseUrl = process.env.REACT_APP_baseUrl || '';

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
    setCurrentImageIndex(0);
  };

  return (
    <CategoryImagesContainer>
        <ChevronLeft size={20} />
      <BackButton onClick={onBack}>
        Back to Categories
      </BackButton>
      <CategoryTitle>{category.name} Images</CategoryTitle>
      <ImageGrid>
        {images.map((image, index) => (
          <GridImage 
            key={image.id} 
            src={`${baseUrl}${image.filepath}`} 
            alt={image.name} 
            onClick={() => handleImageClick(image, index)}
          />
        ))}
      </ImageGrid>
      {selectedImage && (
        <ImageViewer onClick={closeImageViewer}>
          <LargeImage 
            src={`${baseUrl}${images[currentImageIndex].filepath}`} 
            alt={images[currentImageIndex].name} 
            onClick={(e) => e.stopPropagation()}
          />
          <PrevButton onClick={handlePrevImage} disabled={images.length <= 1}>
            <ChevronLeft size={30} color="white" />
          </PrevButton>
          <NextButton onClick={handleNextImage} disabled={images.length <= 1}>
            <ChevronRight size={30} color="white" />
          </NextButton>
        </ImageViewer>
      )}
    </CategoryImagesContainer>
  );
};

const useGalleryTitles = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiClient.get("/open/gallery/titles");
      if (response.data.success) {
        setCategories(response.data.data);
      } else {
        throw new Error(response.data.message || 'Failed to fetch gallery titles');
      }
    } catch (err) {
      setError(err.message || 'Error fetching gallery titles');
      console.error('Error fetching data: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, isLoading, error, refetch: fetchCategories };
};

const GalleryDashboard = () => {
  const { categories, isLoading, error, refetch } = useGalleryTitles();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryImages, setCategoryImages] = useState([]);
  const baseUrl = process.env.REACT_APP_baseUrl || '';

  const handleCategoryClick = async (category) => {
    try {
      const response = await apiClient.get(`/open/gallery/titles?category=${category.url}`);
      if (response.data.success) {
        setCategoryImages(response.data.data);
        setSelectedCategory(category);
      } else {
        throw new Error(response.data.message || 'Failed to fetch category images');
      }
    } catch (err) {
      console.error('Error fetching category images:', err);
      // You might want to show an error message to the user here
    }
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCategoryImages([]);
  };

  if (isLoading) return <LoadingMessage>Loading our fun categories...</LoadingMessage>;
  if (error) return <ErrorMessage>Oops! Something went wrong: {error}</ErrorMessage>;

  return (
    <PageContainer>
      <Header>
        <Title>Our Colorful Gallery</Title>
        <RefreshButton onClick={refetch}>
          <RefreshCw size={20} />
          Refresh
        </RefreshButton>
      </Header>
      {selectedCategory ? (
        <CategoryImages 
          category={selectedCategory} 
          images={categoryImages} 
          onBack={handleBackToCategories}
        />
      ) : (
        <CardGrid>
          {categories.map((category, index) => (
            <Card key={category.id} index={index} onClick={() => handleCategoryClick(category)}>
              <CardImage src={`${baseUrl}${category.filepath}`} />
              <CardContent>
                <CategoryName>{category.name}</CategoryName>
              
            
              </CardContent>
            </Card>
          ))}
        </CardGrid>
      )}
    </PageContainer>
  );
};

export default GalleryDashboard;