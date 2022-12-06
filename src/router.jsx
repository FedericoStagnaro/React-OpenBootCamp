import {createBrowserRouter} from 'react-router-dom'

import TasksPage from './pages/TasksPage'

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
        element: (<div><p>Login</p></div>)
    },
    {
        path: '/register',
        element: (<div><p>Register</p></div>)
    },
])

export default router