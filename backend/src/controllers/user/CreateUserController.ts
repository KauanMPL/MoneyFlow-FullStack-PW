import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;

            console.log("1 - Dados recebidos:", { name, email });

            const createUserService = new CreateUserService();

            console.log("2 - Chamando serviço...");

            const user = await createUserService.execute({
                name,
                email,
                password
            });

            console.log("3 - Cadastro concluído:", user);

            return res.status(201).json({
                message: "Usuário cadastrado com sucesso!",
                user
            });

        } catch (error) {
            console.error("ERRO NO CADASTRO:", error);

            return res.status(400).json({
                error: "Não foi possível cadastrar o usuário."
            });
        }
    }
}

export { CreateUserController };