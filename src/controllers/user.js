import UserRepository from "../models/repo/user.repo"
import MakeError from "../util/error"
import { createJwt, validatePassword } from "../util/util"
import { validateNewUserInput, validateUserLoginInput } from "../util/validate"

const createNewUser = async (
    { userInput },
    { repo = new UserRepository() } = {}
) => {
    await validateNewUserInput(userInput)

    const userExist = await repo.byQueryOrNull({
        $or: [{ email: userInput.email }, { name: userInput.name.toLowerCase() }]
    })
    if (userExist) {
        throw new MakeError(
            "name or email taken",
            "USER_INPUT_ERROR"
        )
    }

    let newUser = await repo.create(userInput)

    const token = createJwt({ email: newUser.email })

    return { ...newUser._doc, token }

}

const userLogin = async (
    { loginInput },
    { repo = new UserRepository() } = {}
) => {
    await validateUserLoginInput(loginInput)

    const userExist = await repo.byQueryOrNull({ email: loginInput.email }, "+password")
    if (!userExist) {
        throw new MakeError(
            "invalid email or password",
            "USER_INPUT_ERROR"
        )
    }

    if (!await validatePassword(loginInput.password, userExist.password)) {
        throw new MakeError(
            "invalid email or password",
            "USER_INPUT_ERROR"
        )
    }

    const token = createJwt({ email: userExist.email })

    return { ...userExist._doc, token }
}


const userUpdateProfile = async (
    { updateInput },
    currentUser,
    { repo = new UserRepository() } = {}
) => {
    if (!currentUser.user) {
        throw new MakeError(
            "Not authorized to access this resource",
            "USER_AUTHORIZATION_ERROR"
        )
    }

    let user = await repo.byId(currentUser.user._id)

    if (updateInput.name || updateInput.email) {
        const userExist = await repo.byQueryOrNull({
            $or: [{ email: updateInput.email }, { name: updateInput.name.toLowerCase() }]
        })
        if (userExist && userExist._id.toString() !== user._id.toString()) {
            throw new MakeError(
                "name or email taken",
                "USER_INPUT_ERROR"
            )
        }
    }


    let updatedInput = {}
    updatedInput.bio = updateInput.bio || user.bio || ""
    updatedInput.image = updateInput.image || user.image || ""
    updatedInput.phoneNumber = updateInput.phoneNumber || user.phoneNumber || ""
    updatedInput.email = updateInput.email || user.email || ""
    updatedInput.address = updateInput.address || user.address || ""
    updatedInput.name = updateInput.name || user.name || ""

    user = await repo.update({ _id: user._id }, updatedInput)

    return user


}

module.exports = {
    createNewUser,
    userLogin,
    userUpdateProfile,
    userUpdateProfile
}