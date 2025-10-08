import { useNavigate } from 'react-router'
import { useAppContext } from '../AppProvider'

const Login = () => {
  const navigate = useNavigate()

  const { setIsLoggedIn } = useAppContext()

  const handleLogin = () => {
    setIsLoggedIn(true)
    navigate('/admin')
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='w-full max-w-sm bg-white rounded-lg shadow-md p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center text-blue-700'>Login</h2>
        <div className='mb-4'>
          <label className='block text-gray-700 mb-2'>Username</label>
          <input
            type='text'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Enter your username'
          />
        </div>
        <div className='mb-6'>
          <label className='block text-gray-700 mb-2'>Password</label>
          <input
            type='password'
            className='w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Enter your password'
          />
        </div>
        <button
          type='button'
          onClick={handleLogin}
          className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer'
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login