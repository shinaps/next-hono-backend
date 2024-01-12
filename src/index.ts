import { Hono } from 'hono'

const app = new Hono()

const route = app.get('/', (c) => {
  return c.json({
    message: 'Hello World!',
  }, 200)
})

export type AppType = typeof route
export default app
