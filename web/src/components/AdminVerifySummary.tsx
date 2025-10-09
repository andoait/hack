import { funds, identitiesSought } from '../constants'
import { useAppContext } from '../AppProvider'
import { useState } from 'react'

const AdminVerifySummary = () => {
  const [thinger, setThinger] = useState(false)
  const { selectedFundIdx, accountId } = useAppContext()

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Verification Summary</h1>

      {/* Fund Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Fund Selected</h2>
        <p className="text-gray-600">
          {funds[selectedFundIdx]?.name} - ${funds[selectedFundIdx]?.symbol} ({funds[selectedFundIdx]?.address})
        </p>
      </div>

      {/* Corporate Entity Information */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">DLT Account Address to be whitelisted</h2>
        <p className="text-gray-600">{accountId}</p>
      </div>

      {/* Credential Verification */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-700">Credential Verification</h2>
        <div className="space-y-2">
          {identitiesSought.map((identity, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-green-600 text-lg mr-2">✅</span>
              <p className="text-gray-600">{identity.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Whitelist Button */}
      <div className="mt-8">
        <button
          type="button"
          className="py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
          onClick={async () => {
            setThinger(true)
            const result = await fetch('/api/whitelist', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                accountId,
                tokenAddress: funds[selectedFundIdx]?.address,
              }),
            })
            const data = await result.json()
            console.log('Whitelist response:', data)
            alert(`Whitelist response: ${JSON.stringify(data)}`)
            setThinger(false)
          }}
        >
          Whitelist {accountId} on token {funds[selectedFundIdx]?.address}:
        </button>
      </div>
    </div>
  )
}

export default AdminVerifySummary