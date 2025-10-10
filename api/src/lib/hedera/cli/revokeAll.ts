import { funds, suggestedAddresses } from '../../../../../shared/constants.ts'
import { tokenRevokeKycAccountId } from '../tokenRevokeKycAccountId.ts';

const revokeAll = async () => {
  for (const fund of funds) {
    for (const address of suggestedAddresses) {
      await tokenRevokeKycAccountId(fund.address, address)
    }
  }
}

;(async () => {
  await revokeAll()
  process.exit(0)
})()
