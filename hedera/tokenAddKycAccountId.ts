import {
    TokenGrantKycTransaction,
    AccountId,
    TokenId,
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from '@shared/constants'
import { initHederaClient } from './utils'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

const tokenAddKycAccountId = async (tokenId: TokenId | string, accountId: AccountId | string) => {
    try {
        const tx = new TokenGrantKycTransaction()
            .setTokenId(tokenId)
            .setAccountId(accountId)
            .freezeWith(client)
        const signedTx = await tx.sign(operatorKey)

        // Submit the transaction
        const txResponse = await signedTx.execute(client)
        const receipt = await txResponse.getReceipt(client)

        console.log(`Token KYC granted successfully. Status: ${receipt.status.toString()}`)
    } catch (error) {
        console.error("Error granting token KYC:", error)
        throw error
    }
}

// Read command line arguments
const args = process.argv.slice(2)
const TOKEN_ID = args[0] || '0.0.6975422'  // Default value if not provided
const ACCOUNT_ID = args[1] || '0.0.6941568'  // Default value if not provided


;(async () => {
  await tokenAddKycAccountId(TOKEN_ID, ACCOUNT_ID)
  process.exit(0)
})()

// export {
//     tokenAddKycAccountId
// }