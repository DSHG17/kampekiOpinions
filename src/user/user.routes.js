import { Router } from "express";
import { updatePasswordValidator, updateUsernameValidator } from "../middlewares/user-validators.js";
import { updatePassword, updateUsername } from "./user.controller.js";

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

export default router