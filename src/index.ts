import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message: 'Hello World!',
  }, 200)
})

export type AppType = typeof app
export default app
