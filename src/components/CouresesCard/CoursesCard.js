import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CoursesCard = ({ course }) => {
    const {id, name, image, description, price } = course;

    return (


        <div className='col mb-5'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={image} style={{height: '10em'}} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description.length > 100 ? description.slice(0, 100) + '...' : description }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <h6 className='text-success d-flex align-items-center'>{price}</h6>
                    <Button variant='success'><Link className='text-light' to={`/courses/${id}`}>Details<FaArrowRight /></Link></Button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default CoursesCard;