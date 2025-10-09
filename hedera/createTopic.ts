import { TopicCreateTransaction } from '@hashgraph/sdk'
import { operatorAccountId, network, operatorKeyType } from '@shared/constants'
import { initHederaClient } from './utils'

const [client, operatorKey] = initHederaClient(network, operatorAccountId, operatorKeyType)

const createTopic = async () => {
  try {
    const transaction = new TopicCreateTransaction()
      .setAdminKey(operatorKey.publicKey) // Set the admin key for the topic
      .setSubmitKey(operatorKey.publicKey) // Optional: Set the submit key
      .freezeWith(client)

    const signedTransaction = await transaction.sign(operatorKey)
    const txResponse = await signedTransaction.execute(client)
    const receipt = await txResponse.getReceipt(client)

    const topicId = receipt.topicId
    console.log(`New Topic ID created: ${topicId!.toString()}`)
    return topicId
  } catch (error) {
    console.error('Error creating topic:', error)
    throw error
  }
}

;(async () => {
  await createTopic()
  process.exit(0)
})()

export default createTopic
