import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for doesn’t exist.
                    </p>
                    {/* <a href="index.html" class="btn btn-primary">Go Home</a> */}
                    <Link className='btn btn-primary' to='/'>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Page404;