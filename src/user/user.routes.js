import { Router } from "express";
import { updatePasswordValidator, updateProfilePictureValidator, updateUsernameValidator } from "../middlewares/user-validators.js";
import { updatePassword, updateProfilePicture, updateUsername } from "./user.controller.js";
import { uploadProfilePicture } from "../middlewares/multer-upload.js";
const router = Router()

/**
 * @swagger
 * /updatePassword:
 *   patch:
 *     summary: Actualiza la contraseña del usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *               newPassword:
 *                 type: string
 *               oldPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contraseña actualizada
 *       404:
 *         description: Contraseña incorrecta
 *       400:
 *         description: La nueva contraseña no puede ser igual a la anterior
 *       500:
 *         description: Error al actualizar la contraseña
 */

router.patch("/updatePassword",
    updatePasswordValidator,
    updatePassword
)

/**
 * @swagger
 * /updateUsername:
 *   patch:
 *     summary: Actualiza el nombre de usuario
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *               newUsername:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Nombre de usuario actualizado
 *       400:
 *         description: El nuevo nombre de usuario no tiene que ser igual al actual
 *       500:
 *         description: Error al actualizar el nombre de usuario
 */

router.patch("/updateUsername",
    updateUsernameValidator,
    updateUsername
)

/**
 * @swagger
 *   patch:
 *     summary: Actualiza la foto de perfil
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profilePicture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Imagen de usuario 
 *       400:
 *         description: No se proporciono la nueva foto de perfil
 *       500:
 *         description: Error al actualizar la foto de perfil del usuario
 */

router.patch("/updateProfilePicture",
    uploadProfilePicture.single("profilePicture"),
    updateProfilePictureValidator,
    updateProfilePicture
)

export default router