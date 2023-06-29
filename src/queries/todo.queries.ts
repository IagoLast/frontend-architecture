import todoRepository from '@/repositories/todo.repository';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export function useListTodos() {
	return useQuery({
		queryKey: ['todo', 'list'],
		queryFn: todoRepository.list,
	});
}

export function useCreateTodoMutation() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: todoRepository.create,
		onSuccess() {
			client.invalidateQueries(['todo', 'list']);
		},
	});
}
