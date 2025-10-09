
import express from 'express'
import type { Request, Response } from 'express'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)
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

  // Dynamic import to break circular dependency
  // Dynamic import with relative path to avoid circular dependency
  // const { default: tokenAddKycAccountId } = await import('../shared/hedera/dist/hedera/tokenAddKycAccountId.js')
 
  const cmd = `cd ../hedera && ./node_modules/.bin/ts-node --require tsconfig-paths/register tokenAddKycAccountId.ts ${tokenAddress} ${accountId}`
  console.log(`Executing command: ${cmd}`)

  const { stdout, stderr } = await execAsync(cmd)

  if (stderr) {
    console.error('CLI stderr:', stderr)
  }
  
  console.log('CLI stdout:', stdout)
  
  const result = {
    success: true,
    output: stdout,
    command: cmd
  }
  
  console.log('KYC Result:', result)

  return res.status(200).json({
    error: 0,
    message: `Account ${accountId} successfully whitelisted for token ${tokenAddress}`,
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})