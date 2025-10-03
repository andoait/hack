import { useState } from 'react'
import { funds } from '../constants'

const Funds = () => {
  const [selected, setSelected] = useState(funds[0].symbol)
  const selectedFund = funds.find(fund => fund.symbol === selected)

  return (
    <>
      <select
        className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
        value={selected}
        onChange={e => setSelected(e.target.value)}
      >
        {funds.map(fund => (
          <option key={fund.symbol} value={fund.symbol}>
            {fund.name}
          </option>
        ))}
      </select>
      <div className='mt-0 text-sm text-gray-600'>
        Symbol: <span className='font-mono text-blue-700'>{selectedFund?.symbol}</span>
        <br />
        Address: <span className='font-mono text-blue-700'>{selectedFund?.address}</span>
        <br />
        Network: <span className='font-mono text-blue-700'>hedera.{selectedFund?.network}</span>
      </div>
    </>
  )
}

export default Funds