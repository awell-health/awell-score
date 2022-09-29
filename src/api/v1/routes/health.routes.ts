import express from 'express'

const health_router = express.Router()

/**
 * Health check
 */
health_router.get('/health', (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
  }

  res
    .set({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    })
    .status(200)
    .send(data)
})

export default health_router
