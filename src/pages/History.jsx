import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { deleteHistory, getHistory } from '../services/allAPI';

function History() {
  const [video, setVideo] = useState([]);

  const getVideo = async () => {
    try {
      const result = await getHistory();
      console.log(result);
      setVideo(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  const removeVideo = async (videoId) => {
    try {
      await deleteHistory(videoId);
      setVideo((prevVideos) => prevVideos.filter((vi) => vi.id !== videoId));
      console.log('Video deleted');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='mt-5 container d-flex justify-content-between'>
        <div>Watch History</div>
        <Link to='/Home' style={{ textDecoration: 'none' }}>Back to Home</Link>
      </div>

      <div className='d-flex table-responsive container align-items-center m-2 row'>
        <Table striped bordered hover className='mt-5'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Date & Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {video.map((vi, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{vi.caption}</td>
                <td>
                  <a href={vi.utubUrl} target="_blank" rel="noopener noreferrer">{vi.utubUrl}</a>
                </td>
                <td>{vi.fromateDate}</td>
                <td>
                  <button onClick={() => removeVideo(vi.id)} className='btn'>
                    <i className="fa-solid fa-trash" style={{ color: 'orange', backgroundColor: 'black' }}></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default History;
