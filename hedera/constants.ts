import type { hederaKeyType, hederaNetwork } from './types'

const operatorAccountId = '0.0.6941543' // STEX
const operatorKeyType: hederaKeyType = 'ed25519'
const network: hederaNetwork = 'testnet'

const funds = [
  { name: 'Gold Fund', symbol: 'GOLD_STEX', address: '0.0.6975418', network: 'testnet', description: 'A diversified fund with exposure to physical gold, senior/junior miners, gold derivatives (including options) and global venue exposure (London, Shanghai, Switzerland, etc.)' },
  { name: 'AI Asia Fund', symbol: 'AI_ASIA_STEX', address: '0.0.6975419', network: 'testnet', description: 'Exposure to new and emerging AI companies in Asia. No more than 50% exposure to China.' },
  { name: 'Mining Fund', symbol: 'MINING_STEX', address: '0.0.6975421', network: 'testnet', description: 'Provides exposure to a diversified portfolio of mining companies, including precious metals, base metals, and industrial minerals.' },
  { name: 'Rare Earth Metals Fund', symbol: 'RARE_EARTH_STEX', address: '0.0.6975422', network: 'testnet', description: 'Focused on companies involved in the extraction and processing of rare earth metals.' },
  { name: 'Quantum Computing Fund', symbol: 'QUANTUM_STEX', address: '0.0.6975423', network: 'testnet', description: 'Companies developing quantum computing technologies and applications.' }
]

const toggleLabels = [
  {title: 'Verify individual\'s identity', hint: 'Requires Government ID (e.g. passport, driver\'s license)'},
  {title: 'Legal entity has a valid GLEIF LEI', hint: 'Proof is required that the corporate entity\'s Legal Entity Identifier (LEI) is valid'},
  {title: 'Verified not on an AML list', hint: 'Confirms entity is not on Anti-Money Laundering lists'},
  // {title: 'Verified not on a sanctions list', hint: 'Confirms entity is not on sanctions lists'},
  {title: 'Verified not a PEP', hint: 'Confirms entity is not a Politically Exposed Person'},
  // {title: 'Verified not on a fraud watchlist', hint: 'Confirms entity is not on fraud watchlists'},
  // {title: 'Verified not on a high risk list', hint: 'Confirms entity is not on high risk lists'},
  // {title: 'Verified not a tax haven', hint: 'Confirms entity is not a tax haven'},
  // {title: 'Verified not a shell company', hint: 'Confirms entity is not a shell company'}
]

export {
  operatorAccountId,
  operatorKeyType,
  network,
  toggleLabels,
  funds
}
