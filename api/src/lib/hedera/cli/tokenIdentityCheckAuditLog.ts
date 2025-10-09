import identityCheckAuditLog from '../tokenIdentityCheckAuditLog.ts'

;(async () => {
    await identityCheckAuditLog('test-credential-id', ['aid1', 'aid2', 'aid3', 'aid4'])
    process.exit(0)
})()
