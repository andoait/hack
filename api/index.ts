import express, { type Request, type Response } from 'express'

const app = express()
const PORT = 8080

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello World!' })
})

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})