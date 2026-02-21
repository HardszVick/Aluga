import z from 'zod';

export const EmailSchema = z.email("Formato de e-mail inválido")
  .min(5, "E-mail muito curto")
  .max(255, "E-mail muito longo");