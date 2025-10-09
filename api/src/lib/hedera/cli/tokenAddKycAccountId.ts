import { tokenAddKycAccountId } from '../tokenAddKycAccountId.ts'

// Read command line arguments
const args = process.argv.slice(2)
const TOKEN_ID = args[0] || '0.0.6975422'  // Default value if not provided
const ACCOUNT_ID = args[1] || '0.0.6941568'  // Default value if not provided

;(async () => {
  await tokenAddKycAccountId(TOKEN_ID, ACCOUNT_ID)
  process.exit(0)
})()
