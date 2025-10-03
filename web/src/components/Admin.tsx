import { useState } from 'react'
import { useNavigate } from 'react-router'
import { toggleLabels } from '../constants'
import { useAppContext } from '../AppProvider'
import Funds from './Funds'
import HederaAddressInput from './HederaAddressInput'

const Admin = () => {
  const {toggles, setToggles } = useAppContext()
  const [evidence, setEvidence] = useState(Array(toggleLabels.length).fill(null))
  const [showComment, setShowComment] = useState(Array(toggleLabels.length).fill(false))
  const [comments, setComments] = useState(Array(toggleLabels.length).fill(''))

  const navigate = useNavigate()

  const handleToggle = (index: number) => {
    setToggles(prev =>
      prev.map((val, i) => (i === index ? !val : val))
    )
  }

  const handleEvidenceChange = (index: number, file: File | null) => {
    setEvidence(prev =>
      prev.map((val, i) => (i === index ? file : val))
    )
  }

  const handleShowComment = (index: number) => {
    setShowComment(prev =>
      prev.map((val, i) => (i === index ? !val : val))
    )
  }

  const handleCommentChange = (index: number, value: string) => {
    setComments(prev =>
      prev.map((val, i) => (i === index ? value : val))
    )
  }

  const allToggled = toggles.every(Boolean)
  const toggledCount = toggles.filter(Boolean).length

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

        <label className="block mb-0 text-lg font-bold text-gray-700">
          Select STEX Tokenized Fund
        </label>
        <Funds />

        <label className="block mb-0 mt-12 text-lg font-bold text-gray-700">
          Corporate entity account address
        </label>
        <HederaAddressInput />

        <label className='block mb-0 mt-12 text-lg font-bold text-gray-700'>
          Corporate entity verification
        </label>
        
        {toggleLabels.map((item, idx) => (
          <div key={item.title} className='flex flex-col gap-2 mb-6'>
            <div className='flex items-center'>
              <div className={`flex-1 ${toggles[idx] ? 'opacity-50 pointer-events-none' : ''}`}>
                <label className='text-lg'>{item.title}</label>
                <div className='text-xs text-gray-500'>{item.hint}</div>
              </div>
              {/* Evidence upload */}
              <label className={`ml-4 flex items-center cursor-pointer ${toggles[idx] ? 'opacity-50 pointer-events-none' : ''}`}>
                <span className='text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded'>
                  {evidence[idx]?.name || 'Attach evidence'}
                </span>
                <input
                  type='file'
                  className='hidden'
                  onChange={e =>
                    handleEvidenceChange(idx, e.target.files?.[0] || null)
                  }
                  disabled={toggles[idx]}
                />
              </label>
              {/* Plus button for comments */}
              <button
                type='button'
                className={`ml-2 p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 transition-colors rounded-full ${toggles[idx] ? 'opacity-50 pointer-events-none' : ''}`}
                onClick={() => handleShowComment(idx)}
                aria-label='Add comment'
                disabled={toggles[idx]}
              >
                <svg className='w-5 h-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
                </svg>
              </button>
            </div>
            {showComment[idx] && (
              <textarea
                className={`mt-2 w-full border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ${toggles[idx] ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-50' : ''}`}
                rows={2}
                placeholder='Write a comment...'
                value={comments[idx]}
                onChange={e => handleCommentChange(idx, e.target.value)}
                disabled={toggles[idx]}
              />
            )}
            <button
              type='button'
              onClick={() => handleToggle(idx)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
                toggles[idx] ? 'bg-green-500' : 'bg-gray-300'
              }`}
              aria-pressed={toggles[idx]}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  toggles[idx] ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
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
          Progress: {toggledCount} / {toggleLabels.length}
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
        {toggleLabels.filter((item, idx) => { return !toggles[idx] }).map((item, idx) => {
          return (
            <>
              - {item.title} <br/>
            </>
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
  </div>
)
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