import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg='danger' data-bs-theme='dark'>
      <Container>
        <Nav className='me-auto'>
          <Link to='/' className='nav-item nav-link'>Home</Link>
          <Link to='/contacto' className='nav-item nav-link'>Contacto</Link>
        </Nav>
        <Navbar.Brand href='/#'>Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Menu
