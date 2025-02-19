import { Router } from "express";
import { updatePasswordValidator } from "../middlewares/user-validators.js";
import { updatePassword } from "./user.controller.js";

const router = Router()

/**
 * @swagger
 * /updatePassword:
 *   patch:
 *     summary: Actualiza la sesion de un usuario
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

export default router