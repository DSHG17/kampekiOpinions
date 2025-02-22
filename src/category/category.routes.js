import { Router } from "express"
import { createCategory, updateCategory } from "./category.controller.js"
import { createCategoryValidator, updateCategoryValidator } from "../middlewares/category-validators.js"


const router = Router() 

/**
 * @swagger
 * /createCategory:
 *   post:
 *     summary: Crea una nueva categoria
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria creada exitosamente
 *       500:
 *         description: Error al crear la categoria
 */
router.post(
    "/createCategory",
    createCategoryValidator, 
    createCategory
)

/**
 * @swagger
 * /updateCategory:
 *   put:
 *     summary: Actualiza una categoria existente
 *     tags: [Category]
 *     requestParams:
 *       required: true
 *       content:
 *               cid
 *     requestBody:
 *       required: true
 *       content:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoria actualizada exitosamente
 *       500:
 *         description: Error al actualizar la categoria
 */
router.put(
    "/updateCategory/:cid",
    updateCategoryValidator, 
    updateCategory
)



export default router