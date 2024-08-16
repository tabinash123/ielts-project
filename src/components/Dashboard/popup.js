import React, { useState } from "react";
import styled from "styled-components";
import { Upload, X, Plus, Trash2 } from "lucide-react";
import apiClient from "../../repository/apiClient";

const PopUpContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 1rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  border-radius: 4px;
  font-size: 1rem;
  color: #34495e;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ecf0f1;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
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
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const PopUp = () => {
  const [image, setImage] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log('Selected images:', files);
    setImage(files);
  };

  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    image.forEach((file) => {
      formData.append("file", file);
    });
    formData.append("order", "1");
    apiClient.post('/admin/pop-notice/add', formData)
      .then(() => {
        alert('Notice uploaded successfully');
        setImage([]);
      })
      .catch(() => {
        alert('Error uploading notice');
      });
  };

  const handleRemove = () => {
    apiClient.delete('/admin/pop-notice/delete/1')
      .then(() => {
        alert('Notice deleted successfully');
      })
      .catch(() => {
        alert('Error deleting notice');
      });
  };

  return (
    <PopUpContainer>
      <Title>PopUp Notice Management</Title>
      
      <Section>
        <SectionTitle>Add PopUp Notice</SectionTitle>
        <Form onSubmit={handleNoticeSubmit}>
          <FileInput
            type="file"
            id="files"
            name="files"
            accept="image/*"
            onChange={handleImageChange}
          />
          <FileInputLabel htmlFor="files">
            <Upload size={24} style={{ marginRight: '0.5rem' }} />
            {image.length > 0 ? `${image.length} file(s) selected` : 'Choose Image'}
          </FileInputLabel>
          {image.length > 0 && (
            <ImagePreview>
              {image.map((file, index) => (
                <PreviewImage key={index} src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
              ))}
            </ImagePreview>
          )}
          <Button type="submit">
            <Plus size={20} />
            Add Notice
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Delete PopUp Notice</SectionTitle>
        <DeleteButton onClick={handleRemove}>
          <Trash2 size={20} />
          Delete Notice
        </DeleteButton>
      </Section>
    </PopUpContainer>
  );
};

export default PopUp;