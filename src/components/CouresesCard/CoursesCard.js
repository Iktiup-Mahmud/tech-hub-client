import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CoursesCard = ({ course }) => {
    const { name, image, description } = course;

    return (


        <div className='col'>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        {description.length > 100 ? description.slice(0, 100) + '...' : description }
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant='success'>Details</Button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default CoursesCard;