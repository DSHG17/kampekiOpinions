import { hash } from "argon2";
import User from "./user.model.js"

export const defaultUser = async () => {

    const adminUser = {
        "name": "Derian",
        "surname": "Hernández",
        "username": "admin",
        "email": "dshgonzalez11@gmail.com",
        "password": "Samedirection14*",
    }
    const firstUser = await User.findOne({
        $or: [
            { email: adminUser.email },
            { username: adminUser.username }
        ]
    });
    if (!firstUser) {
        adminUser.password = await hash(adminUser.password)
         User.create(adminUser);
        
    }
}