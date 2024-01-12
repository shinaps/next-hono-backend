import { Hono } from 'hono'

const app = new Hono()

const route = app.get('/overview', (c) => {
  return c.json({
    totalRevenue: {
      value: '$45,231.8',
      sub: '+20.1% from last month'
    },
    subscriptions: {
      value: '+2350',
      sub: '+180.1% from last month'
    },
    sales: {
      value: '+12,234',
      sub: '+19% from last month'
    },
    activeNow: {
      value: '+573',
      sub: '+201 since last hour'
    }
  }, 200)
})

export type AppType = typeof route
export default app
