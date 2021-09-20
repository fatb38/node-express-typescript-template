/* App Initialization */
import express, {Request, Response} from 'express'
import http from 'http'
import logger from 'morgan'

const app: express.Application = express()
const server: http.Server = http.createServer(app)
const port = process.env.PORT || 3000

// Logger
app.use(logger('dev'))

server.listen(port, () => {
    console.log('listening on : ' + port);
})

/* Routing */
app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the G2Web Project !!!' })
})
