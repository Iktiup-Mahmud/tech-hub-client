import { createBrowserRouter } from "react-router-dom";
import Course from "../../components/Course/Course";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import FAQ from "../../components/FAQ/FAQ";
import Blog from "../../components/Blog/Blog";
import About from "../../components/About/About";
import Page404 from "../../components/Page404/Page404";
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
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
])