import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const navigate = useNavigate()

  return (
    <div>
      <h1>homePage</h1>
      <div>
        <button onClick={() => navigate('/profile')}>Go to Profile</button>
        <button onClick={() => navigate('/statepage', { state: {online: true}, search: '?online=true'})}>Go to state</button>
      </div>
    </div>
  )
}
