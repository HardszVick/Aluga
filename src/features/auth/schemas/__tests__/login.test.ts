import { describe, it, expect } from 'vitest';
import { AluAuthLoginSchema } from '../login';

describe('AluAuthLoginSchema', () => {
    it('Deve validar com sucesso um objeto de registro válido', () => {
        const validData = {
            email: 'usuario@alugafacil.com.br',
            password: 'senhaSegura123'
        };

        const result = AluAuthLoginSchema.safeParse(validData);

        expect(result.success).toBe(true);
    });

    it('Deve falhar se o email for inválido', () => {
        const invalidData = {
            email: 'email-invalido',
            password: 'senhaSegura123'
        };

        const result = AluAuthLoginSchema.safeParse(invalidData);

        expect(result.success).toBe(false);
    });
});