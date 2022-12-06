import {createBrowserRouter} from 'react-router-dom'

import TasksPage from './pages/TasksPage'
import LoginPage from './pages/LoginPage'



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
        element: (<div><p>Register</p></div>)
    },
])

export default router