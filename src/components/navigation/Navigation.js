import React, {useState} from 'react';
import "../../App.css";
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

// const NasaNavItem = 

function Navigation(props){
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/" style={{fontSize:'2rem'}}>
            <img 
            src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' 
            alt='nasa logo'
            style={{width:'200px', height:'100px'}}
            />
            NASA API App
            </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{fontSize:'1.6rem', marginLeft:'50px'}}>
              <NavLink onClick={() => props.selectAppIndex(1)}>Photo of the Day</NavLink>
            </NavItem>
            <NavItem style={{fontSize:'1.6rem', marginLeft:'50px'}}>
              <NavLink onClick={() => props.selectAppIndex(2)}>Earth Satellite Viewer</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;