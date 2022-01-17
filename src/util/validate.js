import joi from 'joi'
import MakeError from './error'

const validateNewUserInput = async  (input) => {
    const schema = joi.object({
        name: joi.string()
            .trim()
            .required(),
        password: joi.string()
            .trim()
            .alphanum()
            .min(8)
            .required(),
        email: joi.string()
            .trim()
            .email()
            .required(),
        bio: joi.string()
            .trim()
            .optional(),
        phoneNumber: joi.string()
            .trim()
            .optional(),

    })

    const { error, value } = schema.validate(input)
   if(error) throw error
}

const validateUserLoginInput = async (
    input
) => {
    const schema = joi.object({
        password: joi.string()
            .trim()
            .alphanum()
            .min(8)
            .required(),
        email: joi.string()
            .trim()
            .email()
            .required()

    })

    const { error, value } = schema.validate(input)
   if(error) throw error
}

module.exports = {
    validateNewUserInput,
    validateUserLoginInput

}