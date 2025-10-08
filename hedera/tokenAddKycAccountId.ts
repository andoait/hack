import {
    TokenGrantKycTransaction,
    AccountId,
    TokenId,
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from './constants'
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

const TOKEN_ID = '0.0.6975423'
const ACCOUNT_ID = '0.0.6941561'

;(async () => {
  await tokenAddKycAccountId(TOKEN_ID, ACCOUNT_ID)
})()

export default tokenAddKycAccountId