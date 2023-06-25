import todoRepository from '@/repositories/todo.repository';
import { useQuery } from '@tanstack/react-query';

export function useListTodos() {
	return useQuery({
		queryKey: ['todo', 'list'],
		queryFn: todoRepository.list,
	});
}
