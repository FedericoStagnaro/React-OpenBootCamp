/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Link, redirect } from 'react-router-dom';
import NotFoundPage from './pages/400/NotFoundPage';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';

function RoutingFinal() {
    let loggedIn = true;

    const routes = createBrowserRouter([
        {
            path: '/',
            loader: () => {
                if(!loggedIn) {
                    return redirect('/login')
                }
            },
            element: <Dashboard/>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '*',
            element: <NotFoundPage></NotFoundPage>
        }
    ])

    return (<RouterProvider router={routes}></RouterProvider>);
}

export default RoutingFinal;
