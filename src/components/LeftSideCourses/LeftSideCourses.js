import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCourses = ({courses}) => {

    return (
        <div className=''>
            {
                courses.map(course => <ul className='text-success'>
                    <li>
                        <h6 key={course.id}>
                            <Link className='text-success text-decoration-none' to={`/courses/${course.id}`}>{course.name}</Link>
                        </h6>
                    </li>
                </ul>)
            }
        </div>
    );
};

export default LeftSideCourses;