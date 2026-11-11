import { Request, Response, Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { validateSchema } from "./middleware/validateSchema";
import { createUserSchema } from "./schemas/userSchema";


const router = Router();

router.post(
    "/users",
    validateSchema(createUserSchema),
    new CreateUserController().handle
)

export { router };