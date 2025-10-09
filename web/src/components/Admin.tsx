import { useNavigate } from 'react-router'
import { identitiesSought } from '@shared/constants'
import { useAppContext } from '../AppProvider'
import Funds from './Funds'
import HederaAddressInput from './HederaAddressInput'
import Chatbot from './Chatbot'
import CredentialVerifyLog from './CredentialVerifyLog'

const Admin = () => {
  const { isToggled } = useAppContext()
  const navigate = useNavigate()

  const allToggled = isToggled.every(Boolean)
  const toggledCount = isToggled.filter(Boolean).length
  
  return (
    <>
      <div className="grid grid-cols-12 gap-6 p-8">
        {/* LEFT COLUMN */}
        {/* <aside className="col-span-3 bg-gray-50 rounded-lg p-4 shadow">
          <h3 className="font-bold text-lg mb-2">Left Column</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>Navigation link</li>
            <li>Helper text</li>
            <li>Status info</li>
          </ul>
        </aside> */}

        {/* CENTER COLUMN */}
        <main className="col-span-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center mb-2">
              <Shield />
              <h2 className="text-2xl font-bold">Administration Panel</h2>
            </div>

            <label className="block mb-2 mt-6 text-xl font-bold text-gray-700">
              1. Select STEX Tokenized Fund
            </label>
            <Funds />

            <label className="block mb-0 mt-12 text-xl font-bold text-gray-700">
              2. Corporate entity DLT account address
            </label>
            <HederaAddressInput />

            <label className='block mb-2 mt-12 text-xl font-bold text-gray-700'>
              3. Credential verification
            </label>

            {identitiesSought.map((_, idx) => (
              <CredentialVerifyLog key={idx} idx={idx} />
            ))}

            <button
              type="button"
              className={`w-full py-2 mt-4 rounded text-white font-bold transition-colors ${
                allToggled
                  ? 'hover:bg-blue-700 bg-blue-600 cursor-pointer'
                  : 'bg-blue-300 cursor-not-allowed'
              }`}
              disabled={!allToggled}
              onClick={() => navigate('/admin/verifySummary')}
            >
              Next
            </button>
            <div className="mb-4 text-gray-700 text-sm">
              Progress: {toggledCount} / {identitiesSought.length}
            </div>
            </div>
        </main>

        {/* RIGHT COLUMN */}
        <aside className="col-span-3 bg-gray-50 rounded-lg p-4 shadow">
          {/* <div className="mt-80"></div> */}
          <h3 className="font-bold text-lg mb-2">Missing credentials</h3>
          <p className="text-sm text-gray-700">
            List of missing information or actions required to complete the verification process.

            <br/>
            <br/>
            {identitiesSought.filter((_, idx) => { return !isToggled[idx] }).map((item, idx) => {
              return (
                <span key={idx}>
                  - {item.title} <br/>
                </span>
              )
            })}
          </p>

          <button
              type="button"
              className={`w-full py-2 mt-4 rounded text-white font-bold transition-colors hover:bg-blue-700 bg-blue-600 cursor-pointer`}
              onClick={() => navigate('/admin/verifySummary')}
            >
              Email client requesting missing information
            </button>
        </aside>

        {/* Chatbot - fixed position at bottom right */}
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot />
        </div>
      </div>
    </>
  )
}

export default Admin

const Shield = () => {
  return (
    <svg
      className='w-7 h-7 text-blue-600 mr-2'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      {/* Blue shield outline */}
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M12 3l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V7l7-4z'
      />
      {/* Blue cross: vertical */}
      <path
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 9v6'
      />
      {/* Blue cross: horizontal */}
      <path
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 12h6'
      />
    </svg>
  )
}