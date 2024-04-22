import { Joi, ValidationError } from "express-validation"

export const characterValidations = {
    body: Joi.object({

        name: Joi.string()
        .required(),

        gender: Joi.string()
        .required(),

        status: Joi.string()
        .required(),

        species: Joi.string()
        .required(),

        type: Joi.string()
    })
}

export const validationError = (err, req, res, next) => {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
}
