import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Header = () => {
    const [theme, setTheme] = useState(true);

    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(() => console.log('logout successfull'))
            .catch(error => console.error(error))
    }


    return (
        <div>
            {/* <h1>Header</h1> */}
            {/* <Link>Link</Link> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Image src={'https://i.postimg.cc/cL8DV4MD/default.png'} roundedCircle fluid style={{ width: '4em' }}></Image>
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


                        </Nav>
                        <Nav>
                            <div onClick={() => setTheme(!theme)} className="me-3">
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
                            <div>
                                {
                                    user?.uid ?

                                        <div className='d-flex'>
                                            {
                                                user?.photoURL ?
                                                    <div className='pe-3 d-flex align-items-center ' >

                                                        <p className='text-light m-0 pe-3'>Wellcome, {
                                                                user?.displayName.length > 6 ?
                                                                    user?.displayName.slice(0, 6) :
                                                                    user?.displayName
                                                            } </p>

                                                        <Image title={user?.displayName} style={{ height: '35px' }} roundedCircle src={user?.photoURL}></Image>
                                                    </div>
                                                    :
                                                    <div>
                                                        <FaUser className='text-light' />
                                                    </div>
                                            }
                                            <Button onClick={handelLogout} variant='danger'>Logout</Button>
                                        </div>


                                        :

                                        <Link className='' to='/login'>
                                            <Button variant='secondary'>Login</Button>
                                        </Link>

                                }
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;