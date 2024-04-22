import expressAsyncHandler from "express-async-handler";
import { Character } from "../model/character.js";
import { characterListService } from "../services/characterService.js";

export const characterList = expressAsyncHandler(async (req, res, next) => {
    res.send(characterListService)
})

export const characterDetail = expressAsyncHandler(async (req, res, next) => {
    res.send(`Details from character id: ${req.params.id}`)
})

export const characterPost = expressAsyncHandler(async (req, res, next) => {
    req.body()
})
