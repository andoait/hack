import Fastify from 'fastify'
import { tokenAddKycAccountId } from './lib/hedera/tokenAddKycAccountId.ts'

const fastify = Fastify({
  logger: true
})

interface Response {
  error: number,
  message: string
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

// Run the server!
try {
  await fastify.listen({ port: 8080 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
