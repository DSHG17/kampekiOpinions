import { hasRoles } from "./role-validator.js";
import { validateJWT } from "./validate-jwt.js";
import { validateFields } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";
import { body,param } from "express-validator";
import { nameCategoryExist, categoryExist } from "../helpers/db-validators.js";

export const createCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("name", "El nombre de la categoría es requerido").notEmpty(),
    body("name").custom(nameCategoryExist),
    validateFields,
    handleErrors
]

export const updateCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("cid", "No es un ID válido de MongoDB").isMongoId(),
    param("cid").custom(categoryExist),
    validateFields,
    handleErrors
]

export const deleteCategoryValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    param("cid","No es un ID válido de MongoDB").isMongoId(),
    param("cid").custom(categoryExist),
    validateFields,
    handleErrors
]
