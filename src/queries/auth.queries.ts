import userRepository from '@/repositories/auth.repository';
import { useMutation } from '@tanstack/react-query';

export function useLoginMutation() {
	return useMutation({
		mutationFn: userRepository.login,
	});
}
