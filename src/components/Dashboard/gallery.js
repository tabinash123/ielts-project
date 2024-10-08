import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Upload, X, ChevronRight, Image as ImageIcon } from 'lucide-react';
import apiClient from '../../repository/apiClient';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  font-size: 1rem;
  background-color: #fff;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232c3e50' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1em;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FileInput = styled.input`
  display: none;
`;

const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border: 2px dashed #3498db;
  border-radius: 6px;
  font-size: 1rem;
  color: #34495e;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ecf0f1;
  }
`;

const ImagePreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ImagePreview = styled.div`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(231, 76, 60, 0.8);
  }
`;

const ImageCounter = styled.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const GalleryDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);
  const [categoryImages, setCategoryImages] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    apiClient.get("/open/gallery/titles").then((response) => {
      setCategories(response.data.data);
    }).catch((error) => {
      console.error('Error fetching data: ', error);
    });
  };

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages([...images, ...files]);
  };

  const handleCategoryImageChange = (event) => {
    const files = Array.from(event.target.files);
    setCategoryImages([...categoryImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleRemoveCategoryImage = (index) => {
    setCategoryImages(categoryImages.filter((_, i) => i !== index));
  };

  const handleVisitGallery = (event) => {
    event.preventDefault();
    const category = event.target.categorySelect.value;
    navigate("/dashboard/images/" + category);
  };

  const handleCategorySubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    
    categoryImages.forEach((file) => {
      formData.append('files', file);
    });
  
    formData.append('title', newCategoryName);

    apiClient.post("/admin/gallery/upload/images", formData).then((response) => {
      alert('Category created and images uploaded successfully');
      fetchCategories();
      setNewCategoryName('');
      setCategoryImages([]);
    }).catch(error => {
      alert('Error creating category and uploading images');
    });
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    const selectedCategory = event.target.categorySelect.value;
  
    const formData = new FormData();
    
    images.forEach((file) => {
      formData.append('files', file);
    });
  
    formData.append('title', selectedCategory);
  
    apiClient.post("/admin/gallery/upload/images", formData).then((response) => {
      alert('Images uploaded successfully');
      setImages([]);
    }).catch((error) => {
      alert('Error uploading images');
    });
  };

  return (
    <PageContainer>
      <Section>
        <SectionTitle>Visit Gallery</SectionTitle>
        <Form onSubmit={handleVisitGallery}>
          <FormGroup>
            <Label htmlFor="visitCategorySelect">Select Category</Label>
            <Select id="visitCategorySelect" name="categorySelect">
              {categories.map((category) => (
                <option key={category.url} value={category.url}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormGroup>
          <Button type="submit">
            Visit Gallery
            <ChevronRight size={20} />
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Create Image Category</SectionTitle>
        <Form onSubmit={handleCategorySubmit}>
          <FormGroup>
            <Label htmlFor="categoryName">Category Name</Label>
            <Input
              type="text"
              id="categoryName"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <FileInput
              type="file"
              id="categoryImages"
              accept="image/*"
              multiple
              onChange={handleCategoryImageChange}
            />
            <FileInputLabel htmlFor="categoryImages">
              <Upload size={24} style={{ marginRight: '0.5rem' }} />
              Choose images for new category
            </FileInputLabel>
          </FormGroup>
          <ImagePreviewContainer>
            {categoryImages.map((image, index) => (
              <ImagePreview key={index}>
                <PreviewImage src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                <RemoveButton onClick={() => handleRemoveCategoryImage(index)}>
                  <X size={16} />
                </RemoveButton>
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
          <ImageCounter>
            <ImageIcon size={16} style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} />
            {categoryImages.length} image{categoryImages.length !== 1 ? 's' : ''} selected
          </ImageCounter>
          <Button type="submit">Create Category</Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Upload Images to Existing Category</SectionTitle>
        <Form onSubmit={handleImageUpload}>
          <FormGroup>
            <Label htmlFor="uploadCategorySelect">Select Category</Label>
            <Select id="uploadCategorySelect" name="categorySelect">
              {categories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <FileInput
              type="file"
              id="uploadImages"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
            <FileInputLabel htmlFor="uploadImages">
              <Upload size={24} style={{ marginRight: '0.5rem' }} />
              Choose images to upload
            </FileInputLabel>
          </FormGroup>
          <ImagePreviewContainer>
            {images.map((image, index) => (
              <ImagePreview key={index}>
                <PreviewImage src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                <RemoveButton onClick={() => handleRemoveImage(index)}>
                  <X size={16} />
                </RemoveButton>
              </ImagePreview>
            ))}
          </ImagePreviewContainer>
          <ImageCounter>
            <ImageIcon size={16} style={{ verticalAlign: 'middle', marginRight: '0.25rem' }} />
            {images.length} image{images.length !== 1 ? 's' : ''} selected
          </ImageCounter>
          <Button type="submit">Upload Images</Button>
        </Form>
      </Section>
    </PageContainer>
  );
};

export default GalleryDashboard;