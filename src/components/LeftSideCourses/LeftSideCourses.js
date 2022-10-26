import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCourses = ({courses}) => {
//     const [courses, setCourses] = useState([])

//     useEffect( () => {
//         fetch('http://localhost:5000/courses')
//         .then(res => res.json())
//         .then(data => setCourses(data))
// },[])

    return (
        <div className=''>
            {
                courses.map(course => <ul className='text-success'>
                    <li>
                        <h6 key={course.id}>
                            <Link className='text-success' to={`/courses/${course.id}`}>{course.name}</Link>
                        </h6>
                    </li>
                </ul>)
            }
        </div>
    );
};

export default LeftSideCourses;