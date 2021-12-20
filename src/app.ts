/* App Initialization */
import express, { Application } from 'express'
import { Server, createServer } from 'http'
import logger from 'morgan'
import routes from './routes'

const app: Application = express()
const server: Server = createServer(app)
const port = process.env.PORT || 3000

// Logger
app.use(logger('dev'))

// Routing
app.use('/', routes)

server.listen(port, () => {
  console.log(`listening on : ${port}`)
})
