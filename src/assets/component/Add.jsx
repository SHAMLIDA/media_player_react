import React, { useState } from 'react';
import { Button, Modal, FloatingLabel, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../../services/allAPI';

function Add({setaddVideoResponse}) {
  const [videoDetails, setVideoDetails] = useState({ caption: '', imageUrl: '', utubUrl: '' });
  const [show, setShow] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getEmbedUrl = (link) => {
    let videoId = '';
    if (link.includes('v=')) {
      videoId = link.split('v=')[1].slice(0, 11);
      setVideoDetails({ ...videoDetails, utubUrl: `https://www.youtube.com/embed/${videoId}` });
      setInvalid(false);
    } else {
      setVideoDetails({ ...videoDetails, utubUrl: '' });
      setInvalid(true);
    }
  };

  const handleUpload = async () => {
    const { caption, imageUrl, utubUrl } = videoDetails;
    if (caption && imageUrl && utubUrl) {
      try {
        const result = await addVideo(videoDetails);
        console.log(result);
        setaddVideoResponse(result.data)
        toast.success(`${result.data.caption} `);
        handleClose();
      } catch (error) {
        toast.error("Failed to add video. Please try again.");
      }
    } else {
      toast.error("Please fill all input fields");
    }
  };

  return (
    <>
      <div className="container d-flex align-items-center">
        
        <h6>Upload new video</h6>
        <button onClick={handleShow} className="btn btn-danger ms-3">
          <i className="fa-solid fa-plus" style={{ color: 'white' }}></i>
        </button>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"orange", textShadow:"inherit", fontWeight:"bold"}}>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill in the following details:</p>
          <div className="border border-3 border-warning m-4 p-3">
            <FloatingLabel controlId="floatingInput" label="Video Caption" className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Video caption" 
                value={videoDetails.caption}
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputImage" label="Image URL" className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Image URL" 
                value={videoDetails.imageUrl}
                onChange={(e) => setVideoDetails({ ...videoDetails, imageUrl: e.target.value })}
              />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInputUrl" label="YouTube URL" className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="YouTube URL" 
                value={videoDetails.utubUrl}
                onChange={(e) => getEmbedUrl(e.target.value)}
              />
            </FloatingLabel>
            {invalid && <p className="text-danger">Invalid URL</p>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </>
  );
}

export default Add;
