import { Router } from "express";
import { createPost, getPosts } from "./post.controller.js";
import { createPostValidator } from "../middlewares/post-validators.js";

const router = Router()


/**
 * @swagger
 * /createPost
 *   post:
 *     summary: Crea una publicacion
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *               title:
 *                      String
 *               description:
 *                      String
 *              user:
 *                      String
 *                  
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       500:
 *         description: Error al eliminar la categoría
 */
router.post(
    "/createPost",
    createPostValidator,
    createPost
)

router.get(
    "/getPosts",
    getPosts
)

export default router