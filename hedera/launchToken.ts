import { TokenCreateTransaction, TokenType, TokenSupplyType } from '@hashgraph/sdk'
import { funds, operatorAccountId, network, operatorKeyType } from './constants'
import { initHederaClient } from './utils'

const [ client, operatorKey ] = initHederaClient(network, operatorAccountId, operatorKeyType)

async function launchTokens() {
  for (const fund of funds) {
    const transaction = await new TokenCreateTransaction()
      .setTokenName(fund.name)
      .setTokenSymbol(fund.symbol)
      .setTokenType(TokenType.FungibleCommon)
      .setDecimals(0)
      .setInitialSupply(21_000_000)
      .setMaxSupply(21_000_000)
      .setTreasuryAccountId(operatorAccountId)
      .setSupplyType(TokenSupplyType.Finite)
      .setKycKey(operatorKey.publicKey) // KYC flag enabled
      .freezeWith(client)
      .sign(operatorKey)

    const txResponse = await transaction.execute(client)
    const receipt = await txResponse.getReceipt(client)
    console.log(`Token created: ${fund.name} (${fund.symbol}) -> Token ID: ${receipt.tokenId?.toString()}`)
  }
}

(async () => {
  console.log('Launching tokens...')
  await launchTokens().catch(console.error)

  console.log('done.')
})()