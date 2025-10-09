### Quickstart

`npm i`

`npm run dev`


### Notes

- uses shared `constants.ts` and `types.ts`
- `tsconfig.json` extends `./tsconfig.base.json`
- For the tsconfig extend to work, you also need to update `vite.config.ts`:

```
resolve: {
    alias: {
      '@shared': path.resolve(__dirname, '../shared'),
    },
  },
```