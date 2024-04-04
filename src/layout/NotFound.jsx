import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div className='d-flex-col align-items-center m-5'>
        <h2>Opps parece que hemos perdido el rumbo</h2>
        <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
    </>
  )
}

export default NotFound
