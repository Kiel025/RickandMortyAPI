import express from 'express'
import 'reflect-metadata'
const app = express()
const port = 3000
import routes from './routes/routes.js'
import { validationError } from './validation.js'
import { AppDataSource } from './data-source.js'
import helmet from 'helmet'

app.use(validationError)
app.use(helmet())
app.use(routes)

await AppDataSource.initialize()

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
