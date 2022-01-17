import { compareSync } from 'bcryptjs'
import {default as jwt} from 'jsonwebtoken'

const createJwt = (detail) => {
    const jwtToken = jwt.sign(detail, process.env.JWT_SECRET)
    return jwtToken
}

const validatePassword = async (text, hashedPassword) => {
    return compareSync(text, hashedPassword)
}

const decryptToken = (token) => {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    return user
}

module.exports = {
    createJwt,
    validatePassword,
    decryptToken
}