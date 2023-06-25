import Todo from '@/components/todo/todo.component';
import { Box, Progress } from '@chakra-ui/react';
import { useTodoList } from './todo-list.controller';

export default function TodoListPage() {
	const { listTodosQuery } = useTodoList();

	return (
		<Box p={16}>
			{listTodosQuery.isLoading ? <Progress size="xs" isIndeterminate /> : <Box h={1} />}

			{listTodosQuery.data?.todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</Box>
	);
}
