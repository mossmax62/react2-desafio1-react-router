import React from 'react'
import { Form, Button } from 'react-bootstrap'

const handleSubmit = (e) => {
  e.preventDefault()
  const saludo = document.querySelector('#saludo')
  saludo.textContent = `Gracias por tu mensaje ${e.target[0].value}, te responderemos pronto.`
}

const Contacto = () => {
  return (
    <div>
      <div className='container' style={{ height: '100vh' }}>
        <div className='d-flex-col align-items-center m-5'>
          <h1>Contacto</h1>
          <h2 id='saludo' />
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
        </div>
      </div>
    </div>
  )
}

export default Contacto
