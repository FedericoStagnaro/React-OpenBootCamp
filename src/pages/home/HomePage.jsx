import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const navigate = useNavigate()

  // const navigate = (path) => {
  //   window.history.pushState({}, undefined, path)
  // }

  return (
    <div>
      <h1>homePage</h1>
      <div>
        <button onClick={() => navigate('/profile')}>Go to Profile</button>
      </div>
    </div>
  )
}
