import { body } from "express-validator";
import { emailExists, usernameExists } from "../helpers/db-validators.js";
import { handleErrors } from "./handle-errors.js";
import { validateFields } from "./validate-fields.js";
import { deleteFileOnError } from "./delete-file-on-error.js";
import { validateJWT } from "./validate-jwt.js";


export const registerValidator = [
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("username").notEmpty().withMessage("El username es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    body("username").custom(usernameExists),
    body("password").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validateFields,
    deleteFileOnError,
    handleErrors
]

export const loginValidator = [
    body("email").optional().isEmail().withMessage("No es un email válido"),
    body("username").optional().isString().withMessage("Username es en formáto erróneo"),
    body("password").isLength({min: 4}).withMessage("El password debe contener al menos 8 caracteres"),
    validateFields,
    handleErrors
]

export const updatePasswordValidator = [
    validateJWT,
    body("newPassword").isLength({min: 8}).withMessage("El password debe contener al menos 8 caracteres"),
    body("newPassword").isStrongPassword({
        minLength: 8,
        minLowercase:1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }),
    validateFields,
    handleErrors
]

export const updateUsernameValidator = [
    validateJWT,
    body("newUsername").custom(usernameExists),
    validateFields,
    handleErrors
]

export const updateProfilePictureValidator = [
    validateJWT,
    validateFields,
    deleteFileOnError,
    handleErrors
]