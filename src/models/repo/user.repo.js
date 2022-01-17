import User from "../user.model"

class UserRepository {
    async create(values) {
        const user = await User.create(values)
        return user
    }

    async byQueryOrNull(query, select) {
        let user = await User.findOne(query)
            .select(select)
        user = user || null
        console.log(user)
        return user
    }

    async byId(id) {
        let user = await User.findById(id)
        user = user || null
        return user
    }

    async update(query, values){
        const updatedUser = await User.findOneAndUpdate(query, values)
        return updatedUser
    }
}

export default UserRepository