/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Link, redirect } from 'react-router-dom';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchService from './components/pure/FetchService';
import LoginReducer from './components/pure/form/LoginReducer';
import LoginUseState from './components/pure/form/LoginUseState';
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
            path: '/users',
            element: <FetchService></FetchService>
        },
        {
            path: '/axios',
            element: <AxiosExample></AxiosExample>
        },
        {
            path: '*',
            element: <NotFoundPage></NotFoundPage>
        },
        {
            path: '/crud',
            element: <AxiosCRUDExample></AxiosCRUDExample>
        },
        {
            path: '/loginState',
            element: <LoginUseState></LoginUseState>
        },
        {
            path: '/loginReducer',
            element: <LoginReducer></LoginReducer>
        },
    ])

    return (<RouterProvider router={routes}></RouterProvider>);
}

export default RoutingFinal;
