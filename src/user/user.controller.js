import { hash, verify } from "argon2";
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

export const updatePassword = async (req, res) => {
    try{
        const   tokenUser  = req.usuario.id
        const { newPassword, oldPassword } = req.body
        
        const user = await User.findById(tokenUser)

        const matchOldPassword = await verify(user.password, oldPassword)

        const matchNewPassword = await verify(user.password, newPassword)

        if(!matchOldPassword){
            return res.status(400).json({
                success: false,
                message: "La contraseña antigua no es la misma a la de la cuenta"
            })
        }

        if(matchNewPassword){
            return res.status(400).json({
                success: false,
                message: "La nueva contraseña no puede ser igual a la anterior"
            })
        }

        const encryptedPassword = await hash(newPassword)

        await User.findByIdAndUpdate(tokenUser, {password: encryptedPassword}, {new: true})

        return res.status(200).json({
            success: true,
            message: "Contraseña actualizada",
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al actualizar contraseña",
            error: err.message
        })
    }
}

