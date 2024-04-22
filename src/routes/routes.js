import axios from 'axios'
import { Router } from 'express'
import { validate } from 'express-validation'
import { characterValidations } from '../validation.js'
import { characterDetail, characterList } from '../controller/characterController.js'
const routes = Router()


// main page
routes.get('/', (req, res) => {
    res.send('HomePage')
})

// about
routes.get('/about', (req, res) => {
    res.send('about us')
})

// character
routes.get('/character', characterList)

routes.post('/character', validate(characterValidations), (req, res) => {
    axios.get()
})

routes.get('/character/:id', characterDetail)

export default routes