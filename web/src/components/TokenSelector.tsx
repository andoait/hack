import { funds } from '@shared/constants'
import { useAppContext } from '../AppProvider'

const TokenSelector = () => { 
  const { selectedFundIdx, setSelectedFundIdx } = useAppContext()

  return (
    <>
      <select
        className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
        value={selectedFundIdx}
        onChange={e => setSelectedFundIdx(Number(e.target.value))}
      >
        {funds.map((fund, idx) => (
          <option key={fund.symbol} value={idx}>
            {fund.name} ({fund.symbol} - {fund.address})
          </option>
        ))}
      </select>
    </>
  )
}

export default TokenSelector