import {
    TokenGrantKycTransaction,
    AccountId,
    TokenId,
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType } from '../../../../shared/constants.ts'
import { initHederaClient } from './utils.ts'

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

export {
    tokenAddKycAccountId
}