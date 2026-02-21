import { TAluRequestResponse } from "@/shared/types/requestResponse";
import { AxiosInstance } from "axios";

type PostAction = {
    url?: string;
    data?: unknown;
}

export abstract class AluRepository {
    constructor(
        private readonly api: AxiosInstance
    ) {}

    post = async <T = Object>({ url = '/', data }: PostAction) => {
        try {
            const response =  await this.api.post<TAluRequestResponse<T>>(url, data)
            return response.data;
        } catch(e) {
            const error = {
                success: false,
                message: 'Ocorreu um erro inesperado'
            } as TAluRequestResponse<T>;

            return error;
        }
    }
}