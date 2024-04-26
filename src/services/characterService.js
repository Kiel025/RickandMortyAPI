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

    static async deleteCharacter(id) {

        const characterRepository = AppDataSource.getRepository(Character)

        if (!(await characterRepository.findOneBy({id: id}))) {
            return new Error(`Character with id: ${id} does not exist`)
        }

        await characterRepository.delete(id)
    }

    static async updateCharacter({id, name, gender, status, species, type}) {
        const characterRepository = AppDataSource.getRepository(Character)

        const character = await characterRepository.findOneBy({id: id})

        if (!character) {
            return new Error(`Character does not exists`)
        }

        character.name = name ? name : character.name
        character.gender = gender ? gender : character.gender
        character.status = status ? status : character.status
        character.species = species ? species : character.species
        character.type = type ? type : character.type

        await characterRepository.save(character)

        return character
    }
}
