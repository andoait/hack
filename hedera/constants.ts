import type { hederaKeyType, hederaNetwork } from './types'

const operatorAccountId = '0.0.6941543' // STEX
const auditTopicId = '0.0.6990935' // STEX audit log
const operatorKeyType: hederaKeyType = 'ed25519'
const network: hederaNetwork = 'testnet'

const funds = [
  { name: 'Gold Fund', symbol: 'GOLD_STEX', address: '0.0.6975418', network: 'testnet', description: 'A diversified fund with exposure to physical gold, senior/junior miners, gold derivatives (including options) and global venue exposure (London, Shanghai, Switzerland, etc.)' },
  { name: 'AI Asia Fund', symbol: 'AI_ASIA_STEX', address: '0.0.6975419', network: 'testnet', description: 'Exposure to new and emerging AI companies in Asia. No more than 50% exposure to China.' },
  { name: 'Mining Fund', symbol: 'MINING_STEX', address: '0.0.6975421', network: 'testnet', description: 'Provides exposure to a diversified portfolio of mining companies, including precious metals, base metals, and industrial minerals.' },
  { name: 'Rare Earth Metals Fund', symbol: 'RARE_EARTH_STEX', address: '0.0.6975422', network: 'testnet', description: 'Focused on companies involved in the extraction and processing of rare earth metals.' },
  { name: 'Quantum Computing Fund', symbol: 'QUANTUM_STEX', address: '0.0.6975423', network: 'testnet', description: 'Companies developing quantum computing technologies and applications.' }
]

const identitiesSought = [
  {
    title: 'Verify individual\'s identity',
    hint: 'Requires Government ID (e.g. passport, driver\'s license)',
    issuerAID: 'DJV9uZfjlUgBZtDIVNCa5TRogupTUVnfma7EOa8Ms7c1',
    name: 'UK Government'
  },
  {
    title: 'Legal entity has a valid GLEIF LEI',
    hint: 'Proof is required that the corporate entity\'s Legal Entity Identifier (LEI) is valid',
    issuerAID: 'DJV9uZfjlUgBZtDIVNCa5TRogupTUVnfma7EOa8Ms7c1',
    name: 'GLEIF'
  },
  {
    title: 'Verified not on an AML list',
    hint: 'Confirms entity is not on Anti-Money Laundering lists',
    issuerAID: 'DJV9uZfjlUgBZtDIVNCa5TRogupTUVnfma7EOa8Ms7c1',
    name: 'STEX Risk Intelligence'
  },
  {
    title: 'Verified not a PEP',
    hint: 'Confirms entity is not a Politically Exposed Person',
    issuerAID: 'DJV9uZfjlUgBZtDIVNCa5TRogupTUVnfma7EOa8Ms7c1',
    name: 'STEX Risk Intelligence'
  }
]

export {
  operatorAccountId,
  auditTopicId,
  operatorKeyType,
  network,
  identitiesSought,
  funds
}
