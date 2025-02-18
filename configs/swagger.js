import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

const swaggerOptions = {
    swaggerDefinition:{
        openapi: "3.0.0",
        info:{
            title: "Kampeki Opinions API",
            version:"1.0.0",
            description: "Api for the administration of a facebook like app",
            contact:{
                name: "Derian Hernandez",
                email: "dhernandez-2023346@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/kampekiOpinions/v1"
            }
        ]
    },
    apis:[
        "./src/auth/*.js"
    ]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)

export { swaggerDocs, swaggerUi }