const { logAuditTrail, verifyAuditLog } = require('./lib/hedera/auditLog')

verifyAuditLog('employeeNumber', ['aid1', 'aid2', 'aid3', 'aid4'], 'jRGGpbRGrCFBHpURZ2ToW7UptzgSOO4kHcDt9xtZDbw=')
