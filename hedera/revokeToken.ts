import {
  TokenRevokeKycTransaction,
  AccountId,
  TokenId
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from './constants'
import { initHederaClient } from './utils'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

const main = async (tokenId: TokenId | string, revokeAccountId: AccountId | string) => {
  // Build the revoke KYC transaction
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

(async () => {
  await main('0.0.5099' /* Gold Fund*/, '0.0.654321')
})()
