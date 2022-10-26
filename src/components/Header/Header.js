import React, { useState } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [theme, setTheme] = useState(true);

    return (
        <div>
            {/* <h1>Header</h1> */}
            {/* <Link>Link</Link> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image src={'https://i.postimg.cc/yN7vm0PB/default-logo.png'} roundedCircle fluid style={{width:'4em'}}></Image>
                    <Navbar.Brand href=""><Link className='text-decoration-none text-success' to='/'><h2>Tech-Hub</h2></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">


                        <Nav className="me-auto">
                        </Nav>


                        <Nav className="me-auto">
                            <NavLink className='text-decoration-none text-secondary fw-semibold ms-3 fs-5' to='/courses'>Courses</NavLink>
                            <NavLink className='text-decoration-none text-secondary fw-semibold ms-3 fs-5' to='/faq'>FAQ</NavLink>
                            <NavLink className='text-decoration-none text-secondary fw-semibold ms-3 fs-5' to='/blog'>Blog</NavLink>
                            <NavLink className='text-decoration-none text-secondary fw-semibold ms-3 fs-5' to='/about'>About</NavLink>

                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link> */}

                        </Nav>
                        <Nav>
                            <div onClick={() => setTheme(!theme)} className="flex md:order-2">
                                {
                                    theme ?
                                        <Button variant="success">
                                            Light
                                        </Button> :
                                        <Button variant="secondary">
                                            Dark
                                        </Button>
                                }
                                <Navbar.Toggle />
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;