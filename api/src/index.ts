import Fastify from 'fastify'
import { tokenAddKycAccountId } from './lib/hedera/tokenAddKycAccountId.ts'
import { tokenRevokeKycAccountId } from './lib/hedera/tokenRevokeKycAccountId.ts'

const fastify = Fastify({
  logger: true
})

interface Response {
  error: number,
  message: string,
  details?: string
}

fastify.get('/', async function handler (req, res) {
  const response: Response = {
    error: 0,
    message: 'Hello World'
  }
  return response
})

fastify.post<{ Body: { accountId: string; tokenAddress: string } }>(
  "/whitelist",
  async (request, reply) => {
    const { accountId, tokenAddress } = request.body

    const result = await tokenAddKycAccountId(tokenAddress, accountId)

    const response: Response = {
      error: 0,
      message: `Received accountId: ${accountId}, tokenAddress: ${tokenAddress}`
    }
    return response
  }
)

fastify.post<{ Body: { accountId: string; tokenAddress: string } }>(
  "/revoke",
  async (request, reply) => {
    const { accountId, tokenAddress } = request.body

    if (!accountId || !tokenAddress) {
      const response: Response = {
        error: 1,
        message: 'Missing accountId or tokenAddress'
      }
      reply.status(400)
      return response
    }

    try {
      const result = await tokenRevokeKycAccountId(tokenAddress, accountId)

      const response: Response = {
        error: 0,
        message: `Account ${accountId} successfully revoked from token ${tokenAddress}`,
        details: JSON.stringify(result)
      }
      return response
    } catch (error) {
      const response: Response = {
        error: 1,
        message: 'Failed to revoke account access',
        details: JSON.stringify(error)
      }
      reply.status(500)
      return response
    }
  }
)

// Run the server
try {
  await fastify.listen({ port: 8080 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
