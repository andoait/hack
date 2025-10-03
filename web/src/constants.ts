import type { hederaKeyType, hederaNetwork } from './types'

const operatorAccountId = '0.0.6941543'
const operatorKeyType: hederaKeyType = 'ed25519'
const network: hederaNetwork = 'testnet'

const clients = [
  { name: 'ClientA', accountId: '0.0.6941561' },
  { name: 'ClientB', accountId: '0.0.6941568' },
  { name: 'ClientX', accountId: '0.0.6941611' }
]

const funds = [
  { name: 'Gold Fund', symbol: 'GOLD_STEX', address: '0.0.6941580', network: 'testnet' },
  { name: 'AI Asia Fund', symbol: 'AI_ASIA_STEX', address: '0.0.6941582', network: 'testnet' },
  { name: 'Mining Fund', symbol: 'MINING_STEX', address: '0.0.6941583', network: 'testnet' },
  { name: 'Rare Earth Metals Fund', symbol: 'RARE_EARTH_STEX', address: '0.0.6941584', network: 'testnet' },
  { name: 'Quantum Computing Fund', symbol: 'QUANTUM_STEX', address: '0.0.6941585', network: 'testnet' }
]

const toggleLabels = [
  {title: 'Verify Individual\'s Identity', hint: 'Requires Government ID (e.g. passport, driver\'s license)'},
  {title: 'Individual has Corporate Authority', hint: 'Requires documentation proving corporate authority'},
  {title: 'Verified not on an AML list', hint: 'Confirms entity is not on Anti-Money Laundering lists'},
  {title: 'Verified not on a sanctions list', hint: 'Confirms entity is not on sanctions lists'},
  {title: 'Verified not a PEP', hint: 'Confirms entity is not a Politically Exposed Person'},
  {title: 'Verified not on a fraud watchlist', hint: 'Confirms entity is not on fraud watchlists'},
  {title: 'Verified not on a high risk list', hint: 'Confirms entity is not on high risk lists'},
  {title: 'Verified not a tax haven', hint: 'Confirms entity is not a tax haven'},
  {title: 'Verified not a shell company', hint: 'Confirms entity is not a shell company'}
]

export {
  operatorAccountId,
  operatorKeyType,
  network,
  toggleLabels,
  clients,
  funds
}
