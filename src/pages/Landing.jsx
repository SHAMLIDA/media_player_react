import React from 'react';
import { Link } from 'react-router-dom';
import landingimg from '../assets/tenor.gif';
import Card from 'react-bootstrap/Card';
import landingimg1 from '../assets/img5.webp';
import landingimg2 from '../assets/img1.gif';
import landingimg3 from '../assets/img6.jpg';



function Landing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ fontFamily: "initial", fontSize: "50px", fontWeight: "bolder" }}>
            Welcome to <span style={{ color: 'orange' }}>media player</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque earum accusamus ipsum est cumque, porro eum repellat omnis obcaecati cupiditate praesentium vitae. Rerum voluptatibus et id fugit modi.
          </p>
          <Link to="/home" className="btn" style={{ backgroundColor: 'orange', color: 'white', border: 'none' }}>
            Get Started
          </Link>
        </div>
        <div className="col-md-6">
          <img src={landingimg} alt="Landing" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-4">
  <div className="col-lg-4 col-md-6 d-flex justify-content-center">
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant="top" src={landingimg2} alt="Card image" className="img-fluid card-img-fixed" style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>Users can upload, view, and remove the videos.</Card.Text>
      </Card.Body>
    </Card>
  </div>
  
  <div className="col-lg-4 col-md-6 d-flex justify-content-center">
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant="top" src={landingimg1} alt="Card image" className="img-fluid card-img-fixed" style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>Users can categorize the videos by drag-and-drop features.</Card.Text>
      </Card.Body>
    </Card>
  </div>
  
  <div className="col-lg-4 col-md-6 d-flex justify-content-center">
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant="top" src={landingimg3} alt="Card image" className="img-fluid card-img-fixed " style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>Users can view and manage their video history.</Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>


     
      <div className="row mt-5" style={{ border: "2px solid white" }}>
  <div className="col-md-6 col-sm-12">
    <h3 style={{ color: "orange" , fontWeight:"bold"}}>Simple, Fast, and Powerful</h3>
    <h6 style={{ fontWeight: "bold" }}>
      Play Everything: 
      <span style={{ fontWeight: "normal", color:"GrayText" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
    <h6 style={{ fontWeight: "bold" }}>
      Categorize Videos: 
      <span style={{ fontWeight: "normal",color:"GrayText"  }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
    <h6 style={{ fontWeight: "bold" }}>
      Managing History: 
      <span style={{ fontWeight: "normal" , color:"GrayText" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam accusamus tempore ratione et vitae cumque, doloremque ullam hic illum neque debitis a, nobis possimus pariatur tenetur voluptate quod ad!
      </span>
    </h6>
  </div>
  
  <div className="col-md-6 col-sm-12 p-3 d-flex justify-content-center align-items-center">
    <iframe 
      width="100%" 
      height="315" 
      src="https://www.youtube.com/embed/7h4FhEePjuU?si=E4jFHN0FkdF5bwIW" 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    ></iframe>
  </div>
</div>

    </div>
  );
}

export default Landing;

