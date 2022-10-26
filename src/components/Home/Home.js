import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './Home.css'

const Home = () => {
    return (
        <div className='body d-flex align-items-center justify-content-center'>
            <div>
                <h1>Wellcome!</h1>
                <h3>To Our Website. (Tech-Hub)</h3>
                <p>We have some courses related programing. That will help you to learn about CS word.</p>
                <Button className='mt-5' variant="success"><Link to='/courses' className='text-white'><h4>Get Start <FaArrowRight/></h4></Link></Button>
            </div>
        </div>
    );
};

export default Home;