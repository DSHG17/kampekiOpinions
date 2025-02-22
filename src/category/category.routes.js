import { Router } from "express"
import { createCategory, deleteCategory, updateCategory } from "./category.controller.js"
import { createCategoryValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/category-validators.js"


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
 * /updateCategory/cid:
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

/**
 * @swagger
 * /deleteCategory/cid:
 *   delete:
 *     summary: Elimina una categoria existente
 *     tags: [Category]
 *     requestParams:
 *       required: true
 *       content:
 *               cid
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       500:
 *         description: Error al eliminar la categoría
 */
router.delete(
    "/deleteCategory/:cid",
    deleteCategoryValidator, 
    deleteCategory
)


export default router