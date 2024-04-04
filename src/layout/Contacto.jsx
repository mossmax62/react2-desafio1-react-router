import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Contacto = () => {
  const [mensaje, setMensaje] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    setMensaje(`Gracias por tu mensaje, enseguida te responderemos a ${e.target[0].value}.`)
  }
  return (
    <div>
      <div className='container'>
        <div className='d-flex-col align-items-center m-5'>
          <h1>Contacto</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
              <Form.Text className='text-muted'>
                No compartiremos tu email con nadie más.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicText'>
              <Form.Label>Mensaje</Form.Label>
              <Form.Control type='text' placeholder='Mensaje' />
            </Form.Group>
            <br />
            <Button variant='primary' type='submit'>
              Enviar
            </Button>
          </Form>
          <h2>{mensaje}</h2>
        </div>
      </div>
    </div>
  )
}

export default Contacto
