import { useAppContext } from '../AppProvider'
import { funds } from '@shared/constants'
import TokenSelector from './TokenSelector'

const Funds = () => {
  // const [selected, setSelected] = useState(funds[0].symbol)
  // const selectedFund = funds.find(fund => fund.symbol === selected)

  const { selectedFundIdx } = useAppContext()

  return (
    <>
      <TokenSelector />
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