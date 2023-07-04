import { useListTodos } from '@/queries/todo.queries';
import { useNavigation, useSearchParams } from 'react-router-dom';

export function useTodoList() {
	const navigation = useNavigation();
	const listTodosQuery = useListTodos();
	const [searchParams, setSearchParams] = useSearchParams();

	function handleAddTodoClick() {
		setSearchParams({ showCreateModal: 'true' });
	}

	function handleCloseModal() {
		searchParams.delete('showCreateModal');
		setSearchParams(searchParams);
	}

	return {
		handleAddTodoClick,
		handleCloseModal,
		isCreateModalOpen: searchParams.get('showCreateModal') === 'true',
		listTodosQuery,
		navigation,
	};
}
