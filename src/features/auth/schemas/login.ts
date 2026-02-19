import { EmailSchema } from "@/shared/infra/schemas";
import { z } from "zod";

export const AluAuthLoginSchema = z.object({
    email: EmailSchema,
    password: z.string()
});

export type AluAuthLoginData = z.infer<typeof AluAuthLoginSchema>;