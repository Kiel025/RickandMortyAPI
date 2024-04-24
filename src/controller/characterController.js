import { CharacterService } from "../services/characterService.js";

export default class CharacterController {

    async getAllCharacters(req, res) {
        const result = await CharacterService.getAll()

        if (result instanceof Error) {
            res.status(400).json(result.message)
        }

        return res.status(200).json(result)
    }

    async createCharacter(req, res) {
        const { name, gender, species, type, status } = req.body
        const result = await CharacterService.createCharacter({ name, gender, species, type, status })
    
        if (result instanceof Error) {
            res.status(400).json(result.message)
        }

        res.status(200).json(result)
    }
}