import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";

const router = Router();

//ROTAS USER
router.post('/users', new CreateUserController().handle)

router.get('/users', new CreateUserController().teste)


export { router }