import { handleErrors } from "./handle-errors.js";
import { validateFields } from "./validate-fields.js";
import { validateJWT } from "./validate-jwt.js";
import { body } from "express-validator";

export const createPostValidator = [
    validateJWT,
    body("user","No es un id valido de mongo").isMongoId(),
    body("category","No es un id valido de mongo").isMongoId(),
    body("title","El titulo es requerido").notEmpty(),
    body("description","La descripcion es requerida").notEmpty(),
    validateFields,
    handleErrors
]