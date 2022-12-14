/* App Initialization */
import express, { Application } from 'express'
import { Server, createServer } from 'http'
import dotenv from 'dotenv'
import logger from 'morgan'
import helmet from 'helmet'
import routes from './routes/index.routes'

const app: Application = express()
const server: Server = createServer(app)
const port = process.env.PORT || 3000

/* Plugins */
dotenv.config()
app.use(helmet())
app.use(logger('dev'))

// Routing
app.use('/', routes)

server.listen(port, () => {
  console.log(`listening on : ${port}`)
})
