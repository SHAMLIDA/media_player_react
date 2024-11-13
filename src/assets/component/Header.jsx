import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
   <Navbar style={{backgroundColor:"orange"}}>
        <Container>
          <Navbar.Brand >
          <Link to={'/'} className='text-white'style={{textDecoration:'none' ,fontSize:'30px',fontFamily:"initial", fontWeight:"bold",}}>
            <i class="fa-solid fa-play p-2"></i>
             MediaPlayer
          </Link>
          </Navbar.Brand>
        </Container> 
      </Navbar>

    </> 
  );
}

export default Header;