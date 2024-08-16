import React, { useState } from 'react';
import styled from 'styled-components';
import apiClient from '../../repository/apiClient';

const baseUrl = process.env.REACT_APP_baseUrl;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #d50000;
  }
`;

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 700px;
  border-radius: 8px;
`;

const CloseButton = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;

  &:hover,
  &:focus {
    color: black;
    text-decoration: none;
  }
`;

const EnlargedImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const ImageTable = ({data}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [notices , SetNotices] = useState(data);

  React.useEffect(() => { 

    apiClient.get('/open/notices/all').then((response) => {
        console.log(response.data.data);
        SetNotices(response.data.data);
    }
    ).catch((error) => {
        alert('Error fetching notices');
    });
}, [data]);

  const handleDelete = (id) => {
    apiClient.delete(`/admin/notice/delete/${id}`).then((response) => {  
        alert('Notice deleted successfully');
        apiClient.get('/open/notices/all').then((response) => {
            console.log(response.data.data);
            SetNotices(response.data.data);
        }
        ).catch((error) => {
            alert('Error fetching notices');
        });
      
    }).catch((error) => {
        alert('Error deleting Notice');
    })
    // Implement your delete logic here
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
          {notices.map((image) => (
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
                <DeleteButton onClick={() => handleDelete(image.id)}>Delete</DeleteButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {selectedImage && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
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





const Notice = () =>{

    const [image, SetImage] = useState([]);
    const [notices , SetNotices] = useState([]);

  
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        console.log('Selected images:', files);
        SetImage([...files]);
    }

    const handleNoticeSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const formData = new FormData();
        formData.append('title', title);
        image.forEach((file, i) => {
            formData.append(`file`, file);
        });
        apiClient.post('/admin/notice/add', formData).then((response) => {
            alert('Notice created successfully');
            e.target.reset();
            apiClient.get('/open/notices/all').then((response) => {
                console.log(response.data.data);
                SetNotices(response.data.data);
            }
            ).catch((error) => {
                alert('Error fetching notices');
            });
        }).catch((error) => {
            alert('Error creating notice');
        });
    }
    return (
        <div>
            <h1>Notice</h1>

            <h2>Create Notice</h2>
      <form onSubmit={handleNoticeSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="textInput" style={{ display: 'block', marginBottom: '5px' }}>
            Enter Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <input
            type="file"
            id="files"
            name="files"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Submit
        </button>


        </form>





        <div>
            <h2>Notice List</h2>
            <ImageTable data={notices}/> 
        </div>
        </div>
    )                

}

export default Notice;