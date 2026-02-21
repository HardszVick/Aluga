import { useMutation } from '@tanstack/react-query';
import { aluAuthRepository } from '../repositories/authRepository';

export const useAluAuthLoginMutation = () => {
    return useMutation({
        mutationFn: aluAuthRepository.login
    });
}