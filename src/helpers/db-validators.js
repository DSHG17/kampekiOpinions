import User from "../user/user.model.js"
import Category from "../category/category.model.js"

export const emailExists = async (email= "") =>{
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${username} is already registered`)
    }
}

export const usernameExists = async (username = "") =>{
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async(uid = '') =>{
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("El usuario no existe")
    }
}

export const nameCategoryExist = async (name= "") => {
    const exist = await Category.findOne({name})
    if(exist) {
        throw new Error(`El nombre ${name}, ya esta en uso para una categoria `)
    }
}