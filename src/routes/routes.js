import axios from 'axios'
import { Router } from 'express'
import { validate } from 'express-validation'
import { characterValidations } from '../validation.js'
import CharacterController from '../controller/characterController.js'
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
routes.get('/character', new CharacterController().getAllCharacters)
routes.post('/character', new CharacterController().createCharacter)
routes.delete('/character/:id', new CharacterController().deleteCharacter)
routes.put('/character/:id', new CharacterController().updateCharacter)

export default routes