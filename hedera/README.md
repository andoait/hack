Add and remove an account from a token's whitelist

### Quickstart

-> Set the value for HEDERA_OPERATOR_KEY in `.env`

`npm i`

Whitelist an account:

- Set TOKEN_ID and ACCOUNT_ID in `tokenAddKycAccountId.ts`

- `./node_modules/.bin/ts-node --require tsconfig-paths/register tokenAddKycAccountId.ts`

Revoke an account from the whitelist:

- Set TOKEN_ID and ACCOUNT_ID in `tokenRevokeKycAccountId.ts`

- `./node_modules/.bin/ts-node --require tsconfig-paths/register tokenRevokeKycAccountId.ts`



### Notes

Must run `ts-node` with `--require tsconfig-paths/register` parameter:
- `npm i --save-dev tsconfig-paths`

uses shared `constants.ts` and `types.ts` in the `../shared` folder:
- note how `tsconfig.json` extends `../tsconfig.base.json`
