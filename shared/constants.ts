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
    title: 'Has a valid government-issued ID',
    hint: 'Requires Government ID (e.g. passport, driver\'s license)',
    name: 'UK Government',
  },
  {
    title: 'Legal entity has a valid GLEIF LEI',
    hint: 'Proof is required that the corporate entity\'s Legal Entity Identifier (LEI) is valid',
    name: 'GLEIF'
  },
  {
    title: 'Verified not on an AML list',
    hint: 'Confirms entity is not on Anti-Money Laundering lists',
    name: 'STEX Risk Intelligence'
  },
  {
    title: 'Verified not a PEP',
    hint: 'Confirms entity is not a Politically Exposed Person',
    name: 'STEX Risk Intelligence'
  }
]

const suggestedAddresses = ['0.0.6941561', '0.0.6941568', '0.0.6941611']
const suggestedSAIDs = [
  [
    { name: 'national-id-clienta', said: 'EDfpEufmixGcwqappwImnHZ8brV1TZRIVYVZU4Mdskcy', issuerSAID: 'DPGIMIILilRi0rezWNpCTQhiPlBkFxNXaQDTpXbyStJN' },
    { name: 'lei-clienta', said: 'EBuheH0-3Yd_inDtw7HCdaIqlbPPru14kLl4p8y-jrvU', issuerSAID: 'DPGIMIILilRi0rezWNpCTQhiPlBkFxNXaQDTpXbyStJN' },
    { name: 'aml-clienta', said: 'EOY7a8Dwt4KhNcq3-mdxkxdG7TkfZjVOWSu49vUHdr8k', issuerSAID: 'DPGIMIILilRi0rezWNpCTQhiPlBkFxNXaQDTpXbyStJN' },
    { name: 'pep-clienta', said: 'EI5KENSYHz6x5ftUd0rOjC0_ETxptZUtMjsPjrlf8ae4', issuerSAID: 'DPGIMIILilRi0rezWNpCTQhiPlBkFxNXaQDTpXbyStJN' }
  ],
  [
    { name: 'national-id-clientb', said: 'EJgzc5XRm07w9ebeuyHFTmXfIdc7ncH7tXwKm4Xw-Upv', issuerSAID: 'DCMaBY_Pa_89BnbpEk-0-Uhg2hf-mCXbDpQClHH7sM_P' },
    { name: 'lei-clientb', said: 'EKhHNWA8mo6cLDfNItNgNuVzoXkS1Y4OFiJ1vD0wLN6C', issuerSAID: 'DCMaBY_Pa_89BnbpEk-0-Uhg2hf-mCXbDpQClHH7sM_P' },
    { name: 'aml-clientb', said: 'EH9_h-k7LLO9WWcapIeuBsZJccX3eYWXzhbLBoDfzH-E', issuerSAID: 'DCMaBY_Pa_89BnbpEk-0-Uhg2hf-mCXbDpQClHH7sM_P' },
    { name: 'pep-clientb', said: 'EHw8ubbCxOUVp6QMyqydhYqzjab1RgonS76t09ZRwAt4', issuerSAID: 'DCMaBY_Pa_89BnbpEk-0-Uhg2hf-mCXbDpQClHH7sM_P' }
  ],
  [
    { name: 'national-id-clientx', said: 'ENJhX7dpsy3R-Dm43lFQmeCnMSMMRMm5ND4JKI5l55FT', issuerSAID: 'DEvIkbD4u9FHXoAxSMVZirvzk8SE5oT0tD7nHs1DFdre' },
    { name: 'lei-clientx', said: 'EM2kv2OsJFlS0ExB0RZKt4ivFaRpsZm7aUIqkOf7eIwu', issuerSAID: 'DEvIkbD4u9FHXoAxSMVZirvzk8SE5oT0tD7nHs1DFdre' },
    { name: 'aml-clientx', said: 'EEo8uT4DxBO9Ds7ptkhHLJpPP81CTCjJmKTXyyG0mU3Y', issuerSAID: 'DEvIkbD4u9FHXoAxSMVZirvzk8SE5oT0tD7nHs1DFdre' },
    { name: 'pep-clientx', said: 'EN7jgJytn9Agw8N6SJGoYuu0qRJ_nlRakkMWDm3f4Wkn', issuerSAID: 'DEvIkbD4u9FHXoAxSMVZirvzk8SE5oT0tD7nHs1DFdre' }
  ]
]

export {
  operatorAccountId,
  auditTopicId,
  operatorKeyType,
  network,
  identitiesSought,
  funds,
  suggestedAddresses,
  suggestedSAIDs
}
