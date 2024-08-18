import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import CategoryPhotos from './CategoryPhotos';

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CategoryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }
`;

const CategoryCard = styled(motion.div)`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
    }
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: 180px;
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CategoryName = styled.h2`
  padding: 15px;
  margin: 0;
  text-align: center;
  background-color: #f8f8f8;
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 12px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 25px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  font-size: 1rem;
  padding: 5px;
  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled(Search)`
  margin-right: 10px;
  color: #888;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
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
  }
`;

const GalleryCategories = () => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://backend.businessitpartners.website/MONTESSORY_RAMESH/open/gallery/titles');
        if (response.data.success) {
          setCategories(response.data.data);
          setFilteredCategories(response.data.data);
        } else {
          throw new Error('Failed to fetch categories');
        }
      } catch (err) {
        setError('Error fetching categories. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const results = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(results);
  }, [searchTerm, categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <Container>{error}</Container>;

  if (selectedCategory) {
    return <CategoryPhotos url={selectedCategory.url} onBack={handleBack} />;
  }

  return (
    <Container>
      <h1>Photo Gallery Categories</h1>
      <SearchContainer>
        <SearchIcon size={20} />
        <SearchInput 
          type="text" 
          placeholder="Search categories..." 
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchContainer>
      <CategoryGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredCategories.map((category) => (
          <CategoryCard
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CategoryImage 
              src={`https://backend.businessitpartners.website${category.filepath}`} 
              alt={category.name} 
            />
            <CategoryName>{category.name}</CategoryName>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </Container>
  );
};

export default GalleryCategories;