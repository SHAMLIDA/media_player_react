import React, { useState } from 'react';
import Add from '../assets/component/Add';
import { Link } from 'react-router-dom';
import View from '../assets/component/View';
import Category from '../assets/component/Category';


function Home() {
  const[addVideoResponse,setaddVideoResponse]=useState(" ")
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
       
        <Add  setaddVideoResponse={setaddVideoResponse}/>
        <Link to="/history" className="text-danger fw-bold d-flex ">Watch History</Link>
      </div>

      <div className="row container-fluid my-5">
        <div className="col-lg-6 col-md-12">
          <h3 style={{color:"orange", textShadow:"inherit", fontWeight:"bold"}}>All videos</h3>
          <View addVideoResponse={addVideoResponse}/>
        </div>
        <div className="col-lg-6 col-md-12">
          <Category />
        </div>
      </div>
    </div>
  );
}

export default Home;
