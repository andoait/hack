
import express from 'express'
import type { Request, Response } from 'express'
import tokenAddKycAccountId from '../hedera/tokenAddKycAccountId'

const app = express()
const PORT = 8080

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

app.post('/whitelist', async (req: Request, res: Response) => {
  const { accountId, tokenAddress } = req.body

  if (!accountId || !tokenAddress) {
    return res.status(400).json({
      error: 1,
      message: 'Missing accountId or tokenAddress'
    })
  }
  console.log(`Whitelisting account ${accountId} for token ${tokenAddress}`)

  const result = await tokenAddKycAccountId(tokenAddress, accountId)
  console.log('KYC Result:', result)

  return res.status(200).json({
    error: 0,
    message: `Account ${accountId} successfully whitelisted for token ${tokenAddress}`,
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})