import Category from "./category.model.js"


export const defaultCategory = async () => {
    const firstCategory = {
        "name": "Reclamos"
    }

    const category = await Category.findOne({name: firstCategory.name})
    if(!category) {
        await Category.create(firstCategory)
        console.log(`Categoría predeterminada creada: ${firstCategory.name}`)
    }
}

export const createCategory = async (req, res) => {
    try {
        const data = req.body

        const category = await Category.create(data)

        return res.status(200).json({
            message: "Categoria creada con exitosamente",
            name: category.name
        })

    } catch (err) {
        return res.status(500).json({
            message: "Error al crear categoría",
            error: err.message
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { cid } = req.params
        const data = req.body

        const updatedCategory = await Category.findByIdAndUpdate(cid, data, {new: true})

        res.status(200).json({
            success: true,
            message: "Categoría actualizada con exitosamente",
            updatedCategory
        })

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error al actualizar la categoría",
            error: err.message
        })
    }
}