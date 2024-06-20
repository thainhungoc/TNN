import React from 'react'
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const BT = () => {
  return (
    <div>
      <div className='top'>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! </p>
            <p className='underline'>ShopNow </p>
            <p className='eng' > English </p>
        </div>

        <div className='Navbar'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Exclusivel</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"></NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>About</Nav.Link> */}
            <Nav.Link href="#action3">About</Nav.Link>
            <Nav.Link href="#action4">Sign up</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control

              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='navbar-btn' >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>

        <div className='content'>
            <div className='leftt'>
                <img src='https://i.pinimg.com/736x/9e/05/da/9e05daac380756df042acd50520bef4e.jpg' alt='khong the tai hinh anh' />
            </div>
            <div className='rightt'>
                <h3>Log in to Exclusive</h3>
                <h5>Enter your details below</h5>
                <input className='body-text' type='text' placeholder='Email or Phone Number'/>
                <input className='body-text' type='password' placeholder='Password'/><br></br>
                <div className='btn' >
                    <button color='rgb(174, 115, 142)'>Login</button>
                    <p>Forget Password?</p>
                </div>
                

            </div>
        </div>

        <div className='footer' >
          <div className='body-footer1'>
            <h5>Exclusive</h5>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <input  type='text' placeholder='Enter your email' />
            {/* <i class="bi bi-send"></i> */}
          </div>
          <div className='body-footer2'>
            <h5>Support</h5>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className='body-footer3'>
            <h5>Account</h5>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className='body-footer4'>
            <h5>Quick Link</h5>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className='body-footer5'>
            <h5>Download App</h5>
            <p>Save $3 with App New User Only</p>
            <div className='img-footer' >
              <img src='https://i.pinimg.com/564x/35/25/32/3525321202cd825a196c12eec4c8207c.jpg' alt='khong the tai hinh anh'className='img1' />   
              <img src='https://i.pinimg.com/736x/c1/ae/62/c1ae621a8f34579501079ba927094e3b.jpg' alt='khong the tai hinh anh' className='img2' />
            </div>
            <div className='icon' >
               <i className="bi bi-facebook"></i>
               <i className="bi bi-twitter"></i>
               <i className="bi bi-instagram"></i>
               <i className="bi bi-linkedin"></i>

            </div>
          </div>

        </div>
    </div>
  )
}
