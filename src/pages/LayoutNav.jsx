import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function LayoutNav() {
  return (
    <main>
        <nav>
            <Link to={'/home'}>Home</Link> {' || '}
            <Link to={'/tasks'}>Tasks</Link> {' || '}
            <Link to={'/login'}>Login</Link> {' || '}
            <Link to={'/register'}>Register</Link>
        </nav>
        <section>
            <Outlet></Outlet>
        </section>
    </main>
  )
}
