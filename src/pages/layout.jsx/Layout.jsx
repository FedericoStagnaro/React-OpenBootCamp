import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <main>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/about'>About</Link> | {" "}
            <Link to='/users'>Users</Link> | {" "}
            <Link to='/tasks'>Tasks</Link>
        </nav>
        <section>
            <Outlet></Outlet>
        </section>
      </main>
    )
  }
}
