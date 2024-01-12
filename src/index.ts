import { Hono } from 'hono'

const app = new Hono()

const route = app
  .get('/overview', (c) => {
    return c.json(
      {
        totalRevenue: {
          value: '$45,231.8',
          sub: '+20.1% from last month',
        },
        subscriptions: {
          value: '+2350',
          sub: '+180.1% from last month',
        },
        sales: {
          value: '+12,234',
          sub: '+19% from last month',
        },
        activeNow: {
          value: '+573',
          sub: '+201 since last hour',
        },
      },
      200,
    )
  })
  .get('chart-data', (c) => {
    const getRandomNumber = () => {
      return Math.floor(Math.random() * 5000) + 1000
    }
    return c.json(
      {
        data: [
          { name: 'Jan', total: getRandomNumber() },
          { name: 'Feb', total: getRandomNumber() },
          { name: 'Mar', total: getRandomNumber() },
          { name: 'Apr', total: getRandomNumber() },
          { name: 'May', total: getRandomNumber() },
          { name: 'Jun', total: getRandomNumber() },
          { name: 'Jul', total: getRandomNumber() },
          { name: 'Aug', total: getRandomNumber() },
          { name: 'Sep', total: getRandomNumber() },
          { name: 'Oct', total: getRandomNumber() },
          { name: 'Nov', total: getRandomNumber() },
          { name: 'Dec', total: getRandomNumber() },
        ],
      },
      200,
    )
  })

export type AppType = typeof route
export default app
