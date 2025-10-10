import {
  TokenRevokeKycTransaction,
  AccountId,
  TokenId
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from '../../../../shared/constants.ts'
import { initHederaClient } from './utils.ts'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

const tokenRevokeKycAccountId = async (tokenId: TokenId | string, revokeAccountId: AccountId | string) => {
  const revokeKycTx = await new TokenRevokeKycTransaction()
    .setAccountId(revokeAccountId)
    .setTokenId(tokenId)
    .freezeWith(client) // freeze before signing
    .sign(operatorKey)  // must be signed with the KYC key

  // Submit the transaction
  const txResponse = await revokeKycTx.execute(client)

  // Get receipt to confirm
  const receipt = await txResponse.getReceipt(client)
  console.log(`Revoke KYC status (token: ${tokenId}, account: ${revokeAccountId}) - `, receipt.status.toString())
}

export { tokenRevokeKycAccountId }
