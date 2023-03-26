import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  NavDropdown,Nav, Navbar } from "react-bootstrap";

import { useState } from 'react';


//create a component call hero

export default function Hero() {
    return (
        <>
        <Hamburger> </Hamburger>
        <StackedHero></StackedHero>
        <MobileStackedHero></MobileStackedHero>
        </>
    )
}

export function StackedHero() {
    return (
      <>
        <div className="container containerBox">
          <div className="col-9">
            <h1 className='headerText'>welcome to my porfolio</h1>
            <div className="overflow-auto" style={{ maxHeight: "800px" }}>
              <div className="tophero"></div>
              <div className="secondhero"></div>
              <div className="thirdhero">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  function Card() {
    return (
      <div className="card" style={{ width: "22em" }}>
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
  

export function Hamburger (){
const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
    return (
        <Navbar expand="md" className="navbar-light bg-light fixed-top">
        <Navbar.Brand href="/" className='col-9 navHead'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={toggleExpanded}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar" className={expanded ? 'show' : ''} >
          <Nav className="ml-auto col-10" navbar>
            <Nav.Link href="#" active>Message Me</Nav.Link>
            <NavDropdown title="Projects" id="dropdown-menu">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
           </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}


export function MobileStackedHero() {
  return (
    <>
      <div className="container containerBoxs">
    
            <div className="tophero"></div>
            <div className="secondhero"></div>
            <div className="thirdhero">
              <Cards />
            </div>
        
      </div>
    </>
  );
}

function Cards() {
  return (
    <div className="card" style={{ width: "15em" }}>
      <div className="card-header">Featured</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  );
}
