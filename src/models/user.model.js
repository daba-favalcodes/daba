import { Schema, model } from 'mongoose'
import {genSalt, genSaltSync, hashSync} from 'bcryptjs'

const userSchema = new Schema({
    email: { type: Schema.Types.String, required: true },
    image: { type: Schema.Types.String },
    name: { type: Schema.Types.String, required: true },
    bio: { type: Schema.Types.String},
    phoneNumber: { type: Schema.Types.String },
    password: { type: Schema.Types.String , required: true},
})

userSchema.pre('save', async function pre(next){
    if(this.isNew){
        const hashedPassword = hashSync(
            this.password,
            genSaltSync(5),
        )
        this.password = hashedPassword

    }
    next()
})

const User = model('user', userSchema)

export default User