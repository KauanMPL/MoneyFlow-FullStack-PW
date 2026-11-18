import {Request, Response, Router} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import {validateSchema} from './middlewares/validateSchema';
import {createUserSchema} from './Schema/userSchema';

const router = Router();

router.post(
    "/users",
    validateSchema(createUserSchema),
    new CreateUserController().handle
);

export default {router};