import { EmailSchema } from "@/shared/infra/schemas";
import { z } from "zod";

export const AluAuthRegisterSchema = z.object({
    email: EmailSchema,
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres")
});

export type AluAuthRegisterData = z.infer<typeof AluAuthRegisterSchema>;