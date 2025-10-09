import { useAppContext } from '../AppProvider'
import { funds } from '@shared/constants'

const Funds = () => {
  // const [selected, setSelected] = useState(funds[0].symbol)
  // const selectedFund = funds.find(fund => fund.symbol === selected)

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
            {fund.name}
          </option>
        ))}
      </select>
      <div className='mt-0 text-sm text-gray-600'>
        Symbol: <span className='font-mono text-blue-700'>{funds[selectedFundIdx]?.symbol}</span>
        <br />
        Address: <span className='font-mono text-blue-700'><a href={`https://hashscan.io/testnet/token/${funds[selectedFundIdx]?.address}`} target="_blank" rel="noopener noreferrer">{funds[selectedFundIdx]?.address}</a></span>
        <br />
        Network: <span className='font-mono text-blue-700'>hedera.{funds[selectedFundIdx]?.network}</span>
      </div>
    </>
  )
}

export default Funds