import {ApolloError} from 'apollo-server-express'

class MakeError extends ApolloError{
    constructor(message, code){
        super(message, code)

        Object.defineProperty(this, 'name', { value: 'MyError' });
    }
}

export default MakeError