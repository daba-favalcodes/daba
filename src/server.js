import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { default as typeDefs } from './schema'
import { default as resolvers } from './resolver'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import verifyToken from './controllers/auth'

dotenv.config()


async function startServer() {
    const app = express();

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context:  async ({req}) => {
            const token = req.headers.authorization || ""
        
            const user =   await verifyToken(token) 

            return {user}
        }
    })

    await server.start()  
    server.applyMiddleware({ app })


  mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true
    })

    app.listen({ port: process.env.PORT || 8080}, () => {
        console.log(`server exposed at ${process.env.PORT}`)
    })

}

export default startServer