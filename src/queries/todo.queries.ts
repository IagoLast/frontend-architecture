import todoRepository from '@/repositories/todo.repository';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

interface IUseTodoDetailsQueryArgs {
	id: string;
}

export function useTodoDetailsQuery(args: IUseTodoDetailsQueryArgs) {
	return useQuery({
		queryKey: ['todo', 'details', args],
		queryFn: () => todoRepository.get(args),
	});
}

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
		onSuccess(_, variables) {
			client.invalidateQueries(['todo', 'list']);
			client.invalidateQueries(['todo', 'details', variables.todo.id]);
		},
	});
}

export function useUpdateTodoMutation() {
	const client = useQueryClient();

	return useMutation({
		mutationFn: todoRepository.update,
		onSuccess(_, variables) {
			client.invalidateQueries(['todo', 'list']);
			client.invalidateQueries(['todo', 'details', variables.todo.id]);
		},
	});
}
