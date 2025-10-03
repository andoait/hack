// utils.ts
import { Client, PrivateKey, AccountId } from '@hashgraph/sdk'
import dotenv from 'dotenv'

dotenv.config() // Load environment variables from .env file

/**
 * Initialise a Hedera Client with safe operator key + network handling
 */
const initHederaClient = (
  network: 'testnet' | 'mainnet' | 'previewnet',
  operatorAccountId: string | AccountId,
  operatorKeyType: 'ecdsa' | 'ed25519'
): [ Client, PrivateKey ] => {
  const rawKey = process.env.HEDERA_OPERATOR_KEY
  if (!rawKey) {
    throw new Error('HEDERA_OPERATOR_KEY not set')
  }

  // Load operator key safely
  let operatorKey: PrivateKey
  if (operatorKeyType === 'ecdsa') {
    operatorKey = PrivateKey.fromStringECDSA(rawKey)
  } else if (operatorKeyType === 'ed25519') {
    operatorKey = PrivateKey.fromStringED25519(rawKey)
  } else {
    throw new Error(`Unknown key type: ${operatorKeyType}`)
  }

  // Initialise client safely
  let client: Client
  if (network === 'testnet') {
    client = Client.forTestnet()
  } else if (network === 'mainnet') {
    client = Client.forMainnet()
  } else if (network === 'previewnet') {
    client = Client.forPreviewnet()
  } else {
    throw new Error(`Unknown Hedera network: ${network}`)
  }

  return [
    client.setOperator(operatorAccountId, operatorKey),
    operatorKey
  ]
}

export { initHederaClient }