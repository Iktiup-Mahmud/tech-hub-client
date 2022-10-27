import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';


const Checkout = () => {
    const course = useLoaderData();
    const { image, name, price, description } = course;

    return (
        <div className='d-flex justify-content-center py-5 bg-dark'>

            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to='/courses'><Button variant="success">Back to courses.</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkout;