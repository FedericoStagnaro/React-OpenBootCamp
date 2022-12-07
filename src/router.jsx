import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'

import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LayoutNav from './pages/LayoutNav'

export default function Router() {
    const navigate = useNavigate()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutNav></LayoutNav>,
            children: [
                {
                    path: '/home',
                    element: (<div><p>Home</p></div>)
                },
                {
                    path: '/tasks',
                    loader: () => {
                        const credentials = localStorage.getItem('credentials')
                        !credentials && navigate('/login')
                    },
                    element: (<TasksPage />)
                },
                {
                    path: '/login',
                    element: (<LoginPage />)
                },
                {
                    path: '/register',
                    element: (<RegisterPage />)
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
