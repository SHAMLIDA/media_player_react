import React from 'react'
import { Link } from 'react-router-dom';
Link

function Footer() {
  return (
<footer className="bg-black text-white py-4">
  <div className="container">
    <div className="row">
      
 
      <div className="col-md-3 mb-4">
        <h5><i className="fa-solid fa-play p-2"></i>Media Player</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, inventore nostrum. Aliquam quam animi amet dolor. Aperiam voluptatibus maxime quasi facilis eius, accusantium repellendus earum, doloremque id odit inventore culpa.</p>
      </div>
      
     
      <div className="col-md-3 mb-4">
        <h5>Links</h5>
       
      
         <Link to={'/'} style={{textDecoration:`none`, color:`white`}}>Landing</Link><br />
         <Link to={'/home'} style={{textDecoration:`none`, color:`white`}}>Home</Link> <br />
         <Link to={'/history'} style={{textDecoration:`none`, color:`white`}}>History</Link>
  
  
       
      
      </div>

    
      <div className="col-md-3 mb-4">
        <h5>Guide</h5>
        <p>React</p>
        <p>React Bootstrap</p>
        <p>Watch Router</p>
      </div>
      
     
      <div className="col-md-3 mb-4">
        <h5>Contact Us</h5>
        <div className="input-group">
          <input type="text"className="form-control" />
          <button style={{backgroundColor:`red`}} className="btn btn-violet" type="button">
            <i className="fa-solid fa-arrow-right text-white"></i>
          </button>
        </div>
        <div className="mt-3">
          <a href="" className="text-white me-4"><i className="fa-brands fa-facebook"></i></a>
          <a href="" className="text-white me-4"><i className="fa-brands fa-twitter"></i></a>
          <a href="" className="text-white me-4"><i className="fa-brands fa-instagram"></i></a>
          <a href="" className="text-white me-4"><i className="fa-brands fa-linkedin"></i></a>
          <a href="" className="text-white me-4"><i className="fa-solid fa-phone"></i></a>
          <a href="" className="text-white me-4"><i className="fa-brands fa-github"></i></a>



        </div>
      </div>

    </div>
  </div>
  <div className="text-secondary text-center">
   copyright © July 2024 Batch, Media Player built with React
</div>
</footer>



  );

  
}

export default Footer