import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CoursesCard from '../CouresesCard/CoursesCard';

const RightSideCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('https://tech-hqcftck3y-iktiup-mahmud.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className='row'>
                {
                    courses.map(course => <CoursesCard course={course} key={course.id}></CoursesCard>)
                }
            </div>
        </div>
    );
};

export default RightSideCourses;