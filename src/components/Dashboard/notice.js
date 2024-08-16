import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Upload, X, Eye, Trash2, Plus } from 'lucide-react';
import apiClient from '../../repository/apiClient';

const baseUrl = process.env.REACT_APP_baseUrl;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
`;

const Section = styled.section`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
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

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color: #34495e;
  font-weight: 600;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid #ecf0f1;
  border-bottom: 1px solid #ecf0f1;

  &:first-child {
    border-left: 1px solid #ecf0f1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-right: 1px solid #ecf0f1;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Modal = styled.div`
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

const ModalContent = styled.div`
  background-color: #fefefe;
  padding: 2rem;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #34495e;
`;

const EnlargedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const ImageTable = ({ data, onDelete }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Action</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((image) => (
            <TableRow key={image.id}>
              <TableCell>{image.title}</TableCell>
              <TableCell>
                <Thumbnail
                  src={baseUrl + image.filepath}
                  alt={image.title}
                  onClick={() => openModal(image)}
                />
              </TableCell>
              <TableCell>
                <ActionButton onClick={() => openModal(image)}>
                  <Eye size={20} color="#3498db" />
                </ActionButton>
                <ActionButton onClick={() => onDelete(image.id)}>
                  <Trash2 size={20} color="#e74c3c" />
                </ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <X size={24} />
            </CloseButton>
            <EnlargedImage
              src={baseUrl + selectedImage.filepath}
              alt={selectedImage.title}
            />
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

const Notice = () => {
  const [image, setImage] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = () => {
    apiClient.get('/open/notices/all')
      .then((response) => {
        setNotices(response.data.data);
      })
      .catch((error) => {
        alert('Error fetching notices');
      });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImage(files);
  };

  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const formData = new FormData();
    formData.append('title', title);
    image.forEach((file) => {
      formData.append(`file`, file);
    });

    apiClient.post('/admin/notice/add', formData)
      .then(() => {
        alert('Notice created successfully');
        e.target.reset();
        setImage([]);
        fetchNotices();
      })
      .catch(() => {
        alert('Error creating notice');
      });
  };

  const handleDelete = (id) => {
    apiClient.delete(`/admin/notice/delete/${id}`)
      .then(() => {
        alert('Notice deleted successfully');
        fetchNotices();
      })
      .catch(() => {
        alert('Error deleting Notice');
      });
  };

  return (
    <PageContainer>
      <Title>Notice Board Management</Title>

      <Section>
        <SectionTitle>Create Notice</SectionTitle>
        <Form onSubmit={handleNoticeSubmit}>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Enter Notice Title"
            required
          />
          <input
            type="file"
            id="files"
            name="files"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <FileInputLabel htmlFor="files">
            <Upload size={24} style={{ marginRight: '0.5rem' }} />
            {image.length > 0 ? `${image.length} file(s) selected` : 'Choose Image'}
          </FileInputLabel>
          <Button type="submit">
            <Plus size={20} />
            Create Notice
          </Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Notice List</SectionTitle>
        <ImageTable data={notices} onDelete={handleDelete} />
      </Section>
    </PageContainer>
  );
};

export default Notice;