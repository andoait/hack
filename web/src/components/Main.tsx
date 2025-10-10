import { Route, Routes } from 'react-router'
import Admin from './Admin'
import Home from './Home'
import About from './About'
import Login from './Login'
import AdminVerifySummary from './AdminVerifySummary'
import Menu from './Menu'
import Revoke from './Revoke'
import Verifier from './Verifier'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/verifySummary' element={<AdminVerifySummary />} />
        <Route path='/revoke' element={<Revoke />} />
        <Route path='/verifier' element={<Verifier />} />
      </Routes>
    </>
  )
}

export default Main