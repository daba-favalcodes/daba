import {gql} from 'apollo-server-express'

const schemaDefs = gql`
    input createUserInput {
        email: String
        image: String
        name: String
        bio: String
        phoneNumber: String
        password: String!
    }

    input loginUserInput {
        email: String!
        password: String!
    }

    input updateProfileInput {
        email: String
        image: String
        name: String
        bio: String
        phoneNumber: String
        password: String
    }

    type User {
        _id: String
        email: String
        image: String
        name: String
        bio: String
        phoneNumber: String
        password: String
        token: String
    }

    type Query{
        getProfile: User
    }

    type Mutation{
        createUser(userInput: createUserInput): User
        loginUser(loginInput: loginUserInput ): User
        updateProfile(updateInput: updateProfileInput): User
    }
`

export default schemaDefs