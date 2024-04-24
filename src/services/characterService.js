import { AppDataSource } from "../database/data-source.js";
import { Character } from "../model/character.js";

export class CharacterService {
    
    static async getAll() {
        const characterRepository = AppDataSource.getRepository(Character)
        const characters = await characterRepository.find()

        return characters
    }

    static async createCharacter({ name, gender, species, type, status }) {
        const characterRepository = AppDataSource.getRepository(Character)

        const character = characterRepository.create({
            name,
            gender,
            species,
            type,
            status,
        })

        await characterRepository.save(character)

        return character
    }

    static async deleteCharacter(id) {}


}