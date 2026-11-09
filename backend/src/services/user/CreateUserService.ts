class CreateUserService {
    async execute() {
        console.log("Serviço em execução");
        return "Usuário criado com sucesso!";
    }
}

export default {CreateUserService};