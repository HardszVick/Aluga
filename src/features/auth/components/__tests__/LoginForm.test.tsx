import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useRouter } from 'next/navigation';
import { AluAuthLoginForm } from '../LoginForm';
import { useAluAuthLoginMutation } from '../../hooks/loginMutation';

vi.mock('next/navigation', () => ({
    useRouter: vi.fn(),
}));

vi.mock('../../hooks/loginMutation', () => ({
    useAluAuthLoginMutation: vi.fn(),
}));

describe('AluAuthLoginForm', () => {
    const mockPush = vi.fn();
    const mockMutateAsync = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();

        vi.mocked(useRouter).mockReturnValue({
            push: mockPush,
        } as any);

        vi.mocked(useAluAuthLoginMutation).mockReturnValue({
            mutateAsync: mockMutateAsync,
            isPending: false,
        } as any);
    });

    it('Deve redirecionar para home após cadastro com sucesso', async () => {
        mockMutateAsync.mockResolvedValue({ success: true, message: 'Sucesso' });

        render(<AluAuthLoginForm />);

        fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
            target: { value: 'usuario@alugafacil.com.br' }
        });

        fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
            target: { value: 'senhaSegura123' }
        });

        fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

        await waitFor(() => {
            expect(mockMutateAsync).toHaveBeenCalledWith({
                email: 'usuario@alugafacil.com.br',
                password: 'senhaSegura123',
            });

            expect(mockPush).toHaveBeenCalledWith('/');
        });
    });

    it('Não deve iniciar a requisição se o email informado for invalido', async () => {
        render(<AluAuthLoginForm />);

        fireEvent.change(screen.getByPlaceholderText(/E-mail/i), {
            target: { value: 'usuarioalugafacil.com.br' }
        });

        fireEvent.change(screen.getByPlaceholderText(/Senha/i), {
            target: { value: 'senhaSegura123' }
        });

        fireEvent.click(screen.getByRole('button', { name: /Entrar/i }));

        await waitFor(() => {
            expect(mockMutateAsync).not.toHaveBeenCalled();
        });
    });
});