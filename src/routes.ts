import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { AuthUserController } from "./controllers/User/AuthUserController";
import { DetailUserController } from "./controllers/User/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
const router = Router();

//ROTAS USER
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle) //rota de login

router.get('/me', isAuthenticated, new DetailUserController().handle)


//ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

export { router }