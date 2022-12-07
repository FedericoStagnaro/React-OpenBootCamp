import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function Router() {


    const router = createBrowserRouter([
        {
            path: '/',
            element: (<div><p>Home</p></div>)
        },
        {
            path: '/tasks',
            element: (<TasksPage/>)
        },
        {
            path: '/login',
            element: (<LoginPage/>)
        },
        {
            path: '/register',
            element: (<RegisterPage/>)
        },
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
