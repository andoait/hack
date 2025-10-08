import crypto from 'crypto'

const verifyAuditLog = (
  credentialId: string,
  aids: string[],
  actualHash: string
): void => {
  const raw = `${credentialId}:${aids.join(',')}`
  
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

verifyAuditLog('test-credential-id', ['aid1', 'aid2', 'aid3', 'aid4'], 'jRGGpbRGrCFBHpURZ2ToW7UptzgSOO4kHcDt9xtZDbw=')

export default verifyAuditLog
