import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { loginProvider, createUser, updateUserProfile } = useContext(AuthContext);
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoUrl, email, password)

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user)
                handelUpdateUser(name, photoUrl)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelUpdateUser = (name, phUrl) => {
        const profile = {
            displayName: name,
            photoURL: phUrl
        }
        updateUserProfile(profile)
            .then(console.log('updated'))
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelGoogleLogin = () => {
        loginProvider(providerGoogle)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }

    const handelGithubLogin = () => {
        loginProvider(providerGithub)
            .then(res => {
                const user = res.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    return (
        <div className='mt-5'>
            <Form onSubmit={handelSubmit} className='mt-5'>
                <section className="vh-90" >
                    <div className="container py-0 h-90">
                        <div className="row d-flex justify-content-center align-items-center h-90">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-centerj">

                                        <h2 className="mb-5 text-center text-success">Registration</h2>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control name='name' type="text" placeholder="Enter your full name" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Photo URL</Form.Label>
                                            <Form.Control name='photoUrl' type="text" placeholder="Photo URL" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control name='email' type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-5" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name='password' type="password" placeholder="Password" required />
                                        </Form.Group>

                                        <p className='text-danger'>{error}</p>

                                        <div className='text-center'>
                                            <Button variant='success' type='submit' className='mb-3 px-3'>Register</Button>
                                        </div>
                                        <div className='d-flex justify-content-center py-1 '>
                                            <div onClick={handelGoogleLogin} className='me-3'>
                                                <h3 className='text-center'><FaGoogle /></h3>
                                                <p>Google</p>
                                            </div>
                                            <div onClick={handelGithubLogin}>
                                                <h3 className='text-center'><FaGithub /></h3>
                                                <p>Github</p>
                                            </div>
                                        </div>
                                        <div className='text-center'>
                                            <p>Already have an account? <Link to='/login'>Please login</Link></p>
                                        </div>


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

export default Register;