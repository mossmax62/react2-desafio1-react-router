import Menu from './components/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './layout/Home'
import Contacto from './layout/Contacto'
import NotFound from './layout/NotFound'

const App = () => {
  return (
    <>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
