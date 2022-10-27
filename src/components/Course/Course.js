import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaClock, FaStar, FaRegUser, FaFilePdf } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    const { id, name, image, author, price, duration, total_enroll, rating, description } = course;

    return (
        <div className='bg-dark' ref={ref}>
            <div className="container">
                <div className='d-flex'>
                    <div className='text-light mt-5'>
                        <h1 className='text-success'>Course details:</h1>
                        <h2 >{name} </h2>



                        
                        <Pdf targetRef={ref} filename="downloaded.pdf" x={1} y={1} scale={0.4}>
                            {({ toPdf }) => <h1 className='text-danger' onClick={toPdf}> <FaFilePdf /></h1>}
                        </Pdf>
                        




                        <div className='mt-4 d-flex align-items-center'>
                            <Image roundedCircle src={author.author_img} style={{ width: '3em' }}></Image>
                            <h6 className='ms-3'>{author.author_name}</h6>
                        </div>
                        <h4 className='text-success mt-4'>Price: <span className='text-warning'>{price}</span></h4>
                        <h5 className='text-success mt-3'>Duration: <span className='text-light'><FaClock /> {duration}</span></h5>
                        <h5 className='text-success mt-3'>Total Enroll:  <span className='text-light'><FaRegUser/> {total_enroll} </span></h5>
                        <h5 className='text-success mt-3'>Rating: <span className='text-light'><span className='text-warning'><FaStar /></span> {rating} </span></h5>
                    </div>
                    <div>
                        <Image rounded fluid style={{ width: '40em' }} src={image} alt="" ></Image>
                    </div>
                </div>
                <div className='text-light mt-5'>
                    <h3 className='text-success'>Course Description:</h3>
                    <h5>{description}</h5>
                </div>
                <div className='mt-5 d-flex justify-content-center'>
                    <Link to={`/checkout/${id}`}><Button variant='success mb-5'>Get Premium Access</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Course;