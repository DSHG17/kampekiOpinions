import { hasRoles } from "./role-validator.js";
import { validateJWT } from "./validate-jwt.js";
import { validateFields } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { body } from "express-validator";
import { nameCategoryExist } from "../helpers/db-validators.js";

export const createCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name", "El nombre de la categoría es requerido").notEmpty(),
    body("name").custom(nameCategoryExist),
    validateFields,
    handleErrors
]