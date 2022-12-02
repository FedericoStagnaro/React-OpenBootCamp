/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/400/NotFoundPage'
import About from './pages/about/About';
import Layout from './pages/layout.jsx/Layout';
import Profile from './pages/profile/Profile';




function AppRoutingOne() {
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
                    element: <Profile></Profile>
                },

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
