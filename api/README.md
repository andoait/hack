An API to handle backend calls to the Hedera network

### Quickstart

-> Set the value for HEDERA_OPERATOR_KEY in `.env`

`npm i`

`node --loader ts-node/esm index.ts`


### curl commands:

```
curl -X POST http://localhost:8080/whitelist \
-H "Content-Type: application/json" \
-d '{
  "accountId": "0.0.6975422",
  "tokenAddress": "0.0.6941568"
}'
```


### Notes

- tsconfig.json uses "shared"




