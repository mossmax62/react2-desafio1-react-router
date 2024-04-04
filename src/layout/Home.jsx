import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='d-flex-col align-items-center m-5'>
        <h1>Home</h1>
        <p>Bienvenido a mi sitio web</p>
        <Link to='/contacto' className='btn btn-primary'>Contacto</Link>
      </div>
    </div>
  )
}

export default Home
