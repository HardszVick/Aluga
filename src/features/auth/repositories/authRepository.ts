import { aluAuthApi } from "@/shared/infra/apis/authApi";
import { AluRepository } from "@/shared/infra/repositories/repository";
import { AluAuthRegisterData } from "../schemas/register";
import { AluAuthLoginData } from "../schemas/login";

class AluAuthRepository extends AluRepository {
    register = (data: AluAuthRegisterData) => {
        return this.post({
            url: '/register',
            data
        });
    }

    login = (data: AluAuthLoginData) => {
        return this.post({
            url: '/login',
            data
        });
    }
}

export const aluAuthRepository = new AluAuthRepository(aluAuthApi);