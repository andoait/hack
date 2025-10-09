import { useState } from "react"
import { useAppContext } from "../AppProvider"
import HederaAddressInput from "./HederaAddressInput"
import TokenSelector from "./TokenSelector"
import { funds } from "@shared/constants"

const Revoke = () => {
  const { selectedFundIdx, accountId } = useAppContext()
  const [thinger, setThinger] = useState(false)
  
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
            <h2>Remove an address from a token's whitelist</h2>

            <h3>Select the token</h3>
            <TokenSelector />
            
            <h3 className='mt-10'>Select the address to revoke</h3>
            <HederaAddressInput />

            <button className='btn-primary mt-10' disabled={thinger} onClick={async () => {
              setThinger(true)

              const result = await fetch('/api/revoke', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  accountId,
                  tokenAddress: funds[selectedFundIdx]?.address,
                }),
              })
              const data = await result.json()
              console.log('Revoke response:', data) 
              
              setThinger(false)
            }}>
              Revoke
            </button>
          </div>
        </main>
      </div>
    </>
  )
}

export default Revoke
