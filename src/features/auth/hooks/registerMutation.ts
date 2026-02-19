import { useMutation } from '@tanstack/react-query';
import { aluAuthRepository } from '../repositories/authRepository';

export const useAluAuthRegisterMutation = () => {
    return useMutation({
        mutationFn: aluAuthRepository.register
    });
}