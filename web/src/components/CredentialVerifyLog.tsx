import { useState, useEffect } from 'react'
import { useAppContext } from '../AppProvider'
import { identitiesSought, suggestedAddresses, suggestedSAIDs } from '@shared/constants'

const CredentialVerifyLog = ({ idx }: { idx: number }) => {
  const { isToggled, setIsToggled, accountId } = useAppContext()
  const { aids, setAids, files, setFiles, comments, setComments } = useAppContext()

  const [isDeclarationChecked, setIsDeclarationChecked] = useState<boolean[]>(Array(identitiesSought.length).fill(false))
  const [isAIDvalid, setIsAIDvalid] = useState<boolean[]>(Array(identitiesSought.length).fill(false))

  const item = identitiesSought[idx]

  const regexAID = /^[A-Za-z0-9-_=]{10,}$/

  const accountIdx = suggestedAddresses.indexOf(accountId) === -1 ? 0 : suggestedAddresses.indexOf(accountId)

  // Auto-fill with suggested value if current value is empty
  useEffect(() => {
    if (!aids[idx] && suggestedSAIDs[accountIdx] && suggestedSAIDs[accountIdx][idx]) {
      const suggestedValue = suggestedSAIDs[accountIdx][idx].said
      setAids((prev) => prev.map((aid, i) => (i === idx ? suggestedValue : aid)))
      if (regexAID.test(suggestedValue.trim())) {
        setIsAIDvalid((prev) => prev.map((valid, i) => (i === idx ? true : valid)))
      }
    }
  }, [idx, accountIdx])

  return (
    <div className={`flex-1 ${isToggled[idx] ? 'opacity-50' : ''}`}>
      <div key={item.title} className="flex flex-col gap-2 mb-6"></div>

      {/* Fields Section */}
      <div className="mt-4 p-4 border rounded-lg bg-gray-50">
        <div className="items-center mb-4">
          <label className="text-lg">{item.title}</label>
          <div className="text-xs text-gray-500">{item.name}</div>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Issuer SAID
          </label>
          <span className='text-sm'>
            <code>{suggestedSAIDs[accountIdx][idx].issuerSAID}</code>
          </span> - <b>{item.name}</b>
        </div>

        {/* SAID Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Credential SAID
          </label>
          <input
            type="text"
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${isAIDvalid[idx] ? '' : 'border-red-600 ring-red-400'}`}
            placeholder="Enter SAID"
            value={aids[idx]}
            onChange={(e) => {
              setAids((prev) => prev.map((aid, i) => (i === idx ? e.target.value : aid)))
              if (regexAID.test(e.target.value.trim())) {
                setIsAIDvalid((prev) => prev.map((valid, i) => (i === idx ? true : valid)))
              } else {
                setIsAIDvalid((prev) => prev.map((valid, i) => (i === idx ? false : valid)))
              }
            }}
            disabled={isToggled[idx]}
          />

          <a href={`https://example.com/verify-aid?aid=${encodeURIComponent(aids[idx])}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex float-right text-xs ${aids[idx].length >= 10 ? '' : 'opacity-50 pointer-events-none'}`}
          >{`https://example.com/verify-aid?aid=${encodeURIComponent(aids[idx])}`}</a>
        </div>
        

        {/* File Upload */}
        <div className="mb-4 mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Attach documentary evidence (optional)
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="file-upload"
              className={`cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                isToggled[idx] ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={(e) => setFiles((prev) => prev.map((file, i) => (i === idx ? e.target.files?.[0] || null : file)))}
              disabled={isToggled[idx]}
            />
            {files[idx] && (
              <p className="text-sm text-gray-600">
                {files[idx]?.name}
              </p>
            )}
          </div>
        </div>

        {/* Comment Textarea */}
        <div className='mb-20'>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Add a comment (optional)
          </label>
          <textarea
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
            placeholder="Write a comment..."
            value={comments[idx]}
            onChange={(e) => setComments((prev) => prev.map((comment, i) => (i === idx ? e.target.value : comment)))}
            disabled={isToggled[idx]}
          />
        </div>

        <div className='float-right -mt-14 mb-12'>
          I am satisfied that this credential is valid and meets the compliance requirements.&nbsp;
          <input 
          type="checkbox" checked={isDeclarationChecked[idx]} onChange={() => {
            const newChecked = [...isDeclarationChecked]
            newChecked[idx] = !newChecked[idx]
            setIsDeclarationChecked(newChecked)
          }} />
        </div>

        {/* Toggle Switch */}
        <div className="flex float-right -mt-10">
          <label className="block text-sm font-medium text-gray-700 mr-4">
            Commit Verification
          </label>
          <button
            type="button"
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors focus:outline-none ${
              isToggled[idx] ? 'bg-green-500' : 'bg-gray-300'
            }`}
            onClick={() => {
              if (!isAIDvalid[idx]) {
                alert('Must provide a valid AID to commit the verification')
                return
              }
              if (!isDeclarationChecked[idx]) {
                alert('Must check the box above declaring you are satisfied with the credential to commit the verification')
                return
              }
              // OK
              setIsToggled((prev) => prev.map((toggled, i) => (i === idx ? !toggled : toggled)))
            }}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                isToggled[idx] ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>


      </div>
    </div>
  )
}

export default CredentialVerifyLog