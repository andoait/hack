import {
    TopicMessageSubmitTransaction,
} from '@hashgraph/sdk'

import { network, operatorAccountId, operatorKeyType, auditTopicId } from '@shared/constants'
import { initHederaClient } from './utils'
import crypto from 'crypto'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

const identityCheckAuditLog = async (
    credentialId: string,
    aids: string[]
) => {
    try {
        const raw = `${credentialId}:${aids.join(',')}` // credentialId:aid1,aid2,aid3,aid4...
        const hash = crypto.createHash('sha256').update(raw).digest('base64')

        const tx = await new TopicMessageSubmitTransaction()
            .setTopicId(auditTopicId)
            .setMessage(hash)
            .freezeWith(client)
        const signedTx = await tx.sign(operatorKey)

        // Submit the transaction
        const txResponse = await signedTx.execute(client)
        const receipt = await txResponse.getReceipt(client)

        console.log(`Identity check audit log created successfully. Status: ${receipt.status.toString()}`)
    } catch (e) {
        console.error("Error creating identity check audit log:", e)
    }
}

;(async () => {
    await identityCheckAuditLog('test-credential-id', ['aid1', 'aid2', 'aid3', 'aid4'])
    process.exit(0)
})()

export default identityCheckAuditLog