import React from 'react';
import { Button, Card } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';


const Checkout = () => {
    // const notify = () => toast('Here is your toast.');
    const course = useLoaderData();
    const { image, name, price, description } = course;

    return (
        <div className='d-flex justify-content-center mt-4'>
            {/* <button onClick={notify}>Make me a toast</button> */}
            {/* <Toaster /> */}

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to='/courses'><Button variant="primary">Back to courses.</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;