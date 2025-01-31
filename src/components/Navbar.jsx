import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { StoreContext } from '../context -and-reducer/StoreContext';

const Navbars = () => {
  const {products} = useContext(StoreContext)
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='text-warning fw-bold fs-2'>Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning' />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="m-auto fs-3">
            <Nav.Link className='text-warning  ms-5 ' href="/">Home</Nav.Link>
            <Nav.Link className='text-warning  ms-5' href="/basket">Basket <span>{products.length}</span></Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbars;
