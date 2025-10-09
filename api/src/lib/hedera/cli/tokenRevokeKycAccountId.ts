import tokenRevokeKycAccountId from '../tokenRevokeKycAccountId.ts'

const TOKEN_ID = '0.0.6975423'
const ACCOUNT_ID = '0.0.6941561'

;(async () => {
  await tokenRevokeKycAccountId(TOKEN_ID, ACCOUNT_ID)
  process.exit(0)
})()
