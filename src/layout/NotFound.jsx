import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='container'>
        <div>Opps parece que hemos perdido el rumbo</div>
        <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
    </>
  )
}

export default NotFound
