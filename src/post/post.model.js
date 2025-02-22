import { Schema, model } from "mongoose"

const postSchema = Schema({
    title:{
        type: String,
        required: [true, "El titulo de la categoria es necesario"],
        maxLength: [50, "El titulo del post no tiene que ser mayor a 50 caracteres"]
    },
    description:{
        type: String,
        required: [true, "La descripción es necesaria"],
        maxLength: [1000, "La descripcion tiene que tener como maximo 1000 caracteres"]
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category:{
        type: [Schema.Types.ObjectId],
        ref: 'Category',
        default: []
    },
    comments:{
        type: [Schema.Types.ObjectId],
        ref: 'Comments',
        default: []
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

export default model("Post", postSchema)