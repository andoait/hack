Add and remove an account from a token's whitelist

### Quickstart

-> Set the value for HEDERA_OPERATOR_KEY in `.env`

`npm i`

Whitelist an account:

- Set TOKEN_ID and ACCOUNT_ID in `tokenAddKycAccountId.ts`

- `ts-node tokenAddKycAccountId.ts`

Revoke an account from the whitelist:

- Set TOKEN_ID and ACCOUNT_ID in `tokenRevokeKycAccountId.ts`

- `ts-node tokenRevokeKycAccountId.ts`
