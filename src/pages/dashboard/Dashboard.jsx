import React from 'react'
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';


export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
        <div>
            <Button variant="contained">Hello World</Button>
            <Copyright></Copyright>
        </div>
    </div>
  )
}
