import React from 'react';
import { Card } from 'react-bootstrap';

const CoursesCard = ({ course }) => {
    const { name, image,  } = course;

    return (


        <div className='col'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>
                        {name}
                    </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Link >Card Link</Card.Link>
                    <Card.Link >Another Link</Card.Link>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default CoursesCard;