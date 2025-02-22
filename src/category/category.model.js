import { Schema, model } from "mongoose"

const categorySchema = Schema({
    name:{
        type: String,
        unique: true,
        required: [true, "El nombre de la categoría es necesario"],
        maxLength: [25, "El nombre de la categoría no puede tener mas de 25 caracteres"]
    },
    status:{
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timeStamps: true
})

export default model("Category", categorySchema)