import React, { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom'

import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LayoutNav from './pages/LayoutNav'

export default function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutNav></LayoutNav>,
            children: [
                {
                    path: '/',
                    loader: ()=>{
                        return redirect('/home')
                    }                
                },
                {
                    path: '/home',
                    element: (<div><p>Home</p></div>)
                 },
                {
                    path: '/tasks',
                    loader: () => {
                        const credentials = localStorage.getItem('credentials')
                        return !credentials && redirect('/login')
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
        },
        {
            path: '*',
            element: <div><p>404 error</p></div>
        }
    ])

    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
