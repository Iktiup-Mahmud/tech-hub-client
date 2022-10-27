import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
    }

    return (
        <div className='mt-5'> 
            <Form onSubmit={handelSubmit} className='mt-5'>
                <section className="vh-90" >
                    <div className="container py-0 h-90">
                        <div className="row d-flex justify-content-center align-items-center h-90">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
                                    <div className="card-body p-5 text-centerj">

                                        <h2 className="mb-5 text-center">Login</h2>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-5" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name='password' type="password" placeholder="Password" required />
                                        </Form.Group>


                                        <div className='text-center'>
                                            <Button variant='success' type='submit' className='mb-3 px-3'>Login</Button>
                                        </div>
                                        <div>
                                            <p>Don't have an account? <Link to='/register'>Please register</Link></p>
                                        </div>

                                        {/* <hr className="my-4"> */}

                                            {/* <button className="btn btn-lg btn-block btn-primary" style="background-color: #dd4b39;"
                                                type="submit"><i className="fab fa-google me-2"></i> Sign in with google</button>
                                            <button className="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;"
                                                type="submit"><i className="fab fa-facebook-f me-2"></i>Sign in with facebook</button> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Form>
        </div>
    );
};

export default Login;