import { useState } from "react";
import apiClient from "../../repository/apiClient";

const PopUp =()=>{

    const [image, SetImage] = useState([]);
  
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        console.log('Selected images:', files);
        SetImage([...files]);
    }

    const handleNoticeSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        image.forEach((file, index) => {
          formData.append("file", file);
        });
        formData.append("order", "1");
        apiClient.post('/admin/pop-notice/add', formData).then((response) => {
          alert('Notice uploaded successfully');
        }).catch((error) => {
          alert('Error uploading notice');
        });
    }  

    const handleRemove = () => {
        apiClient.delete('/admin/pop-notice/delete/1').then((response) => {
            alert('Notice deleted successfully');
            }).catch((error) => {
                alert('Error deleting notice');
            }
        );
    }

    return(
        <div className="popup">
            <div className="popup-inner">
                <h1>PopUp Notice</h1>
                Add PopUp Notice
                <form onSubmit={handleNoticeSubmit}>
       

        <input
            type="file"
            id="files"
            name="files"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Add
        </button>


        </form>
            </div>

            <h2>Delete popup Notice</h2>
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default PopUp