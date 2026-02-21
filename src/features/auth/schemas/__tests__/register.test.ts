import { describe, it, expect } from 'vitest';
import { AluAuthRegisterSchema } from '../register';

describe('AluAuthRegisterSchema', () => {
    it('Deve validar com sucesso um objeto de registro válido', () => {
        const validData = {
            email: 'usuario@alugafacil.com.br',
            password: 'senhaSegura123'
        };

        const result = AluAuthRegisterSchema.safeParse(validData);

        expect(result.success).toBe(true);
    });

    it('Deve falhar se o email for inválido', () => {
        const invalidData = {
            email: 'email-invalido',
            password: 'senhaSegura123'
        };

        const result = AluAuthRegisterSchema.safeParse(invalidData);

        expect(result.success).toBe(false);
    });

    it('Deve falhar se a senha tiver menos de 8 caracteres', () => {
        const data = { 
            email: 'teste@teste.com', 
            password: '123' 
        };
        
        const result = AluAuthRegisterSchema.safeParse(data);

        expect(result.success).toBe(false);

        if (!result.success) {
            const passwordError = result.error.format().password?._errors[0];
            expect(passwordError).toBe("A senha deve ter no mínimo 8 caracteres");
        }
    });
});