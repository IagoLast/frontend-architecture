import { useListTodos } from '@/queries/todo.queries';

export function useTodoList() {
	const listTodosQuery = useListTodos();

	return {
		listTodosQuery,
	};
}
