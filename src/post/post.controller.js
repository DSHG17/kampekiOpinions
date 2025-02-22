import Post from './post.model.js'


/**
 * @swagger
 * /createPost:
 *   post:
 *     summary: Crea una publicacion
 *     tags: [Post]
 *     requestBody:
 *       required: true
 *       content:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       200:
 *         description: Publicacion creada exitosamente
 *       500:
 *         description: Error al crear la publicacion
 */
export const createPost = async (req,res) =>{
    try {   
        const data = req.body;
        const user = req.usuario.id
        
        const post = new Post({
            ...data,
            teacher: user._id,
        })

        await post.save()
        const populatedPost = await Post.findById(post._id).populate('user')
        

        res.status(200).json({
            success: true,
            message: 'Publicacion creada exitosamente'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la publicacion',
            error: error.message   
        })
        
    }
}

export const getPosts = async(req, res) => {
    try{
        const { limits = 3, from = 0} = req.query
        const query = {status: true}

        const [ total, posts ] = await Promise.all([
            Post.countDocuments(query),
            Post.find(query)
                .skip(Number(from))
                .limit(Number(limits))
                .populate('user').populate('category')
        ])
        console.log(posts);
        return res.status(200).json({
            success: true,
            total,
            posts
        })

    }catch(err){
        return res.status(500).json({
            success: false,
            message: "Error al listar los usuarios",
            error: err.message
        })
    }
}