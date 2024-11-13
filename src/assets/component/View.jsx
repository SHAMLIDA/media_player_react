import React, { useEffect, useState } from 'react';
import Vediocard from './Vediocard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getAllVideos } from '../../services/allAPI'; 

function View({addVideoResponse}) {
  const [allVideos, setAllVideos] = useState([]); 
  const [deleteResponse,setdeleteResponse]=useState("")

  useEffect(() => {
    fetchVideos(); 
  }, [addVideoResponse,deleteResponse]);

  console.log(allVideos);

  const fetchVideos = async () => {
    try {
      const result = await getAllVideos(); 
      if (result.status >= 200 && result.status < 300) {
        setAllVideos(result.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Row className=" ">
        {allVideos.length > 0 ? (
          allVideos.map((video) => (
            <Col key={video.id} lg={6} md={6} sm={12}>
              <Vediocard displayData={video} setdeleteResponse= {setdeleteResponse} /> 
            </Col>
          ))
        ) : (
          <h3>No Videos Found</h3>
        )}
      </Row>
    </>
  );
}

export default View;

