import { useNavigate } from 'react-router'
import { useAppContext } from '../AppProvider'

const userName = 'STEX Employee 389183'

const Header = () => {
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn } = useAppContext()

  const logout = () => {
    setIsLoggedIn(false)
    navigate('/login')
  }

  return (
    <header className='flex items-center justify-between px-8 py-4 bg-white border-b mb-8'>
      {/* Stockholm Exchange Logo (SVG placeholder) */}
      <div className='flex items-center'>
        <svg
          className='w-10 h-10 text-blue-700'
          viewBox='0 0 40 40'
          fill='currentColor'
          aria-label='Stockholm Exchange Logo'
        >
          <circle cx='20' cy='20' r='18' stroke='currentColor' strokeWidth='3' fill='white' />
          <text x='20' y='25' textAnchor='middle' fontSize='14' fill='currentColor' fontFamily='sans-serif'>STEX</text>
        </svg>
        <span className='ml-3 font-bold text-xl text-blue-700'>Stockholm Token Exchange STEX</span>
      </div>

      <div className='flex items-center gap-4'>
        <span className={`text-gray-700 font-medium ${!isLoggedIn && 'hidden'}`}>{userName}</span>
        <button
          type='button'
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 hover:scale-102 cursor-pointer transition-transform duration-100 focus:outline-none focus:ring-2 focus:ring-blue-400'
          onClick={() => { logout() }}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header