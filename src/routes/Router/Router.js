import { createBrowserRouter } from "react-router-dom";
import Course from "../../components/Course/Course";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])