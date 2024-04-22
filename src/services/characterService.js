import { AppDataSource } from "../data-source.js";
import { Character } from "../model/character.js";

const characterRepository = AppDataSource.getRepository(Character)

export const characterListService = await characterRepository.findOneBy({
    id: 1,
})