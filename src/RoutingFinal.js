/* eslint-disable no-unused-vars */

import { createBrowserRouter, RouterProvider, Link, redirect } from 'react-router-dom';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
import AxiosExample from './components/pure/AxiosExample';
import FetchService from './components/pure/FetchService';
import NotFoundPage from './pages/400/NotFoundPage';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import TodoPage from './pages/todo/TodoPage';
import ReduxSagaPage from './pages/ReduxSagaPage';

function RoutingFinal() {
    let loggedIn = true;

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <TodoPage></TodoPage>
        },
        {
            path: '/saga',
            element: <ReduxSagaPage></ReduxSagaPage>
        },
    ])

    return (<RouterProvider router={routes}></RouterProvider>);
}

export default RoutingFinal;
