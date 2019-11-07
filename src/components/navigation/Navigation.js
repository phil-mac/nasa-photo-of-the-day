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
import styled from 'styled-components';

const NasaNavbar = styled.div`
    background:lightblue;
    width: 100%;

    .contents{
        /* background:grey; */
        width: 86%;
        color:white;
        margin: 0 auto;
        height:100px; 
        display:flex;
        justify-content:space-between;
        align-items:center;
    }

    button{
        margin:0 50px;
        padding:10px 20px;
        border-radius: 20px;
        box-shadow: 5px 5px 5px grey;
        background:lightgrey;

        transition: transform 0.3s;

        outline: none;

        
        
    }
    .normal{
        &:hover{
            transform: scale(1.1);
        }
    }
    .clickedButton{
        /* transform: translate(-5px 0); */
        box-shadow: none;
        background:white;
    }
`; 

function Navigation(props){
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
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
      <NasaNavbar className='nav'>
          <div className='contents'>
          <div href="/" style={{fontSize:'3rem'}}>
            <img 
            src='https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png' 
            alt='nasa logo'
            style={{width:'200px', height:'100px'}}
            />
            NASA API App
            </div>
            <nav>
                <button onClick={() => props.selectAppIndex(1)} className={props.appIndex === 1 ? 'clickedButton' : 'normal'}>Photo of the Day</button>
                <button onClick={() => props.selectAppIndex(2)} className={props.appIndex === 2 ? 'clickedButton' : 'normal'}>Earth Satellite Viewer</button>
            </nav>
          </div>
      </NasaNavbar>
    </div>
    
  );
        
    
}

export default Navigation;