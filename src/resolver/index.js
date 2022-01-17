import {createNewUser, userLogin, userUpdateProfile} from "../controllers/user"

const resolvers = {
Mutation: {
    createUser:  (_, args) => createNewUser(args),
    loginUser: (_, args) => userLogin(args),
    updateProfile:  (_, args, context) => userUpdateProfile(args, context)
},
Query: {
    getProfile:  (_, args, context) =>  context.user
}
}

export default resolvers