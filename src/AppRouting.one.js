/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Link, redirect } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/400/NotFoundPage'
import About from './pages/about/About';
import Layout from './pages/layout.jsx/Layout';
import Profile from './pages/profile/Profile';
import Task from './pages/tasks/Task';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import Login from './pages/auth/Login';

import { useEffect } from 'react';





function AppRoutingOne() {
    let logged = localStorage.getItem('credentials');


    useEffect(() => {
        logged = localStorage.getItem('credentials');
    }, [])

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/',
                    element: <HomePage></HomePage>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/profile',
                    loader: (algo) => {
                        if (!logged) return redirect('/login')
                    },
                    element: <Profile></Profile>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/tasks',
                    element: <Task></Task>,
                },
                {
                    path: '/tasks/:id',
                    element: <TaskDetailPage ></TaskDetailPage>
                }

            ]
        },

        {
            path: '*',
            element: <NotFoundPage></NotFoundPage>
        }
    ])

    return (<RouterProvider router={routes}></RouterProvider>);
}

export default AppRoutingOne;
