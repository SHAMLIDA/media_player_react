import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteVideos, saveHistory } from '../../services/allAPI';

function VedioCards({ displayData,setdeleteResponse }) {
  console.log(displayData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {

    const {caption,utubUrl}=displayData

    const localTime= new Date();
    console.log(localTime);
    const fromateDate=localTime.toLocaleString();
    console.log(fromateDate);

   let  HistoryDate={caption,utubUrl,fromateDate}
   console.log(HistoryDate);
   try {
    await saveHistory (HistoryDate)
    
   } catch (error) {
    
    console.log(err);
   }

    
    
    
    setShow(true)};

  const handleRemoveVideo = async (videoid) => {
    try {
      const result = await deleteVideos(videoid);
      setdeleteResponse(result.data)
      console.log( result);
      console.log(result.data);
    } catch (error) {
      console.log("Error deleting video:", error);
    }
  };
  
  return (
    <>
      <Card style={{ width: '100%', height: "100%", marginTop: "10px" }}>
        <Card.Img 
          onClick={handleShow} 
          style={{ height: '200px', padding: '3%' }} 
          variant="top" 
          src={displayData?.imageUrl} 
        />
        <Card.Body>
          <Card.Title className='d-flex align-items-center justify-content-between'>
            <p>{displayData?.caption}</p>
            <button 
              onClick={() => handleRemoveVideo(displayData?.id)} 
              className='btn'
            >
              <i 
                className="fa-solid fa-trash" 
                style={{ color: 'orange', backgroundColor: 'black' }}
              ></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>
  
  

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe 
            width="100%" 
            height="480" 
            src={`${displayData?.utubUrl}?autoplay=1`} 
            title="Video Player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VedioCards;
