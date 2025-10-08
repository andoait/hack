import {
  TokenRevokeKycTransaction,
  AccountId,
  TokenId
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from './constants'
import { initHederaClient } from './utils'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

const revoke = async (tokenId: TokenId | string, revokeAccountId: AccountId | string) => {
  const revokeKycTx = await new TokenRevokeKycTransaction()
    .setAccountId(revokeAccountId)
    .setTokenId(tokenId)
    .freezeWith(client) // freeze before signing
    .sign(operatorKey)  // must be signed with the KYC key

  // Submit the transaction
  const txResponse = await revokeKycTx.execute(client)

  // Get receipt to confirm
  const receipt = await txResponse.getReceipt(client)
  console.log('Revoke KYC status:', receipt.status.toString())
}

const TOKEN_ID = '0.0.6975418'
const ACCOUNT_ID = '0.0.6941561'

;(async () => {
  await revoke(TOKEN_ID, ACCOUNT_ID)
})()
