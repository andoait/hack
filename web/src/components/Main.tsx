import { Route, Routes } from 'react-router'
import Admin from './Admin'
import Home from './Home'
import About from './About'
import Login from './Login'
import AdminVerifySummary from './AdminVerifySummary'
import AppProvider from '../AppProvider'

const Main = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/verifySummary' element={<AdminVerifySummary />} />
      </Routes>
    </>
  )
}

export default Main