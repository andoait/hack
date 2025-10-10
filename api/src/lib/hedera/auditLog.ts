import crypto from 'crypto'
import { initHederaClient } from './utils.ts'
import { network, operatorAccountId, operatorKeyType, auditTopicId } from '../../../../shared/constants.ts'
import { TopicMessageSubmitTransaction } from '@hashgraph/sdk'

const [client, operatorKey] = initHederaClient(network, operatorAccountId, operatorKeyType)

const logAuditTrail = async (
  auditString: string
): Promise<string> => {
  console.log(`Audit log:\t\t${auditString}`)

  const tx = await new TopicMessageSubmitTransaction()
    .setTopicId(auditTopicId)
    .setMessage(auditString)
    .freezeWith(client)
    .sign(operatorKey)

  const txResponse = await tx.execute(client)
  const receipt = await txResponse.getReceipt(client)

  console.log(`Status:\t\t\t${receipt.status.toString()}`)
  console.log(`Transaction ID:\t\t${tx.transactionId}`)

  return `Audit log response: ${txResponse.transactionId.toString()}`
}

const verifyAuditLog = (
  employeeNumber: string,
  aids: string[],
  actualHash: string
): void => {
  const raw = `${employeeNumber}:${aids.join(',')}`

  const expectedHash = crypto.createHash('sha256').update(raw).digest('base64')

  console.log(`Raw message:\t\t\t${raw}`)
  console.log(`Expected hashed message:\t${expectedHash}`)
  console.log(`Actual hashed message:\t\t${actualHash}`)
  if (expectedHash !== actualHash) {
    console.error('❌ Audit log verification failed')
    // throw new Error('❌ Audit log verification failed')
  } else {
    console.log('✅ Audit log verification succeeded')
  }
}

export {
  logAuditTrail,
  verifyAuditLog
}
