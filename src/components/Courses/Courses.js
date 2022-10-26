import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideCourses from '../LeftSideCourses/LeftSideCourses';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4} className='border border-dark mt-5'>
                        <h1>All courses</h1>
                        <LeftSideCourses courses={courses}></LeftSideCourses>
                    </Col>
                    <Col className='border border-dark'>
                        <h1>Courses</h1>
                    </Col>
                </Row>
            </Container>


            {/* {
                console.log(courses)
            } */}
        </div>
    );
};

export default Courses;