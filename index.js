import { config } from "dotenv"
import { initServer } from "./configs/server.js"
import { defaultUser } from "./src/user/user.controller.js"
import { defaultCategory } from "./src/category/category.controller.js"

config()
initServer()
defaultUser()
defaultCategory()
