import UserRepository from "../models/repo/user.repo";
import MakeError from "../util/error";
import { decryptToken} from "../util/util"

const verifyToken = async (
    token,
    {repo =  new UserRepository()}  = {}
) => {
    if(!token) return null

    const tokenUser =  decryptToken(token)
    if(!tokenUser) return null

    const userExist = await repo.byQueryOrNull(tokenUser)
    if(!userExist) return null
   
    return userExist._doc
}

export default verifyToken