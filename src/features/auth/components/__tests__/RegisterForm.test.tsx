import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useRouter } from 'next/navigation';
import { useAluAuthRegisterMutation } from '../../hooks/registerMutation';
import { AluAuthRegisterForm } from '../RegisterForm';

vi.mock('next/navigation', () => ({
    useRouter: vi.fn(),
}));

vi.mock('../../hooks/registerMutation', () => ({
    useAluAuthRegisterMutation: vi.fn(),
}));

describe('AluAuthRegisterForm', () => {
    const mockPush = vi.fn();
    const mockMutateAsync = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();

        vi.mocked(useRouter).mockReturnValue({
            push: mockPush,
        } as any);

        vi.mocked(useAluAuthRegisterMutation).mockReturnValue({
            mutateAsync: mockMutateAsync,
            isPending: false,
        } as any);
    });

    it('Deve redirecionar para login após cadastro com sucesso', async () => {
        mockMutateAsync.mockResolvedValue({ success: true, message: 'Sucesso' });

        render(<AluAuthRegisterForm />);

        fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
            target: { value: 'usuario@alugafacil.com.br' }
        });

        fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
            target: { value: 'senhaSegura123' }
        });

        fireEvent.click(screen.getByRole('button', { name: /Criar conta/i }));

        await waitFor(() => {
            expect(mockMutateAsync).toHaveBeenCalledWith({
                email: 'usuario@alugafacil.com.br',
                password: 'senhaSegura123',
            });

            expect(mockPush).toHaveBeenCalledWith('/login');
        });
    });

    it('Não deve iniciar a requisição se o formulario for invalido', async () => {
        render(<AluAuthRegisterForm />);

        fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
            target: { value: 'usuarioalugafacil.com.br' }
        });

        fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
            target: { value: '123456' }
        });

        fireEvent.click(screen.getByRole('button', { name: /Criar conta/i }));

        await waitFor(() => {
            expect(mockMutateAsync).not.toHaveBeenCalled();
        })
    });
});