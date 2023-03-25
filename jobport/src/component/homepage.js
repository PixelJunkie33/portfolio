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
   


        </>
    )
}

export function StackedHero() {
    return (
      <>
        <div className="container containerBox">
          <div className="col-9">
            <h1>welcome to my porfolio</h1>
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
        <Navbar.Brand href="/" className='col-2'>My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" onClick={toggleExpanded}>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar" className={expanded ? 'show' : ''} >
          <Nav className="ml-auto col-10" navbar>
            <Nav.Link href="#" active>Active</Nav.Link>
            <NavDropdown title="Dropdown" id="dropdown-menu">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">Link</Nav.Link>
            <Nav.Link href="#" disabled>Disabled</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

