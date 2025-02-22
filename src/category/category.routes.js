import { Router } from "express"
import { createCategory } from "./category.controller.js"
import { createCategoryValidator } from "../middlewares/category-validators.js"


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

export default router