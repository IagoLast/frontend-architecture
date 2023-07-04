import Todo from '@/components/todo/todo.component';
import { Box, Button, Heading, Progress, Skeleton, Stack } from '@chakra-ui/react';
import CreateTodoModal from './components/create-todo.modal';
import { useTodoList } from './todo-list.controller';

export default function TodoListPage() {
	const { navigation, listTodosQuery, isCreateModalOpen, handleAddTodoClick, handleCloseModal } =
		useTodoList();

	return (
		<>
			{navigation.state === 'loading' ? (
				<Progress size="xs" isIndeterminate />
			) : (
				<Box py={4} px={16}>
					<Box
						mb={8}
						display="flex"
						justifyContent="space-between"
						alignContent={'center'}
						as="header"
						borderBottomWidth={1}
						borderBottomColor="gray.200"
						pb={4}
						px={4}
					>
						<Heading>Todo List</Heading>
						<Button colorScheme="purple" onClick={handleAddTodoClick}>
							Add Todo
						</Button>
					</Box>
					<Box as="section">
						{listTodosQuery.data ? (
							listTodosQuery.data?.todos.map((todo) => <Todo key={todo.id} todo={todo} />)
						) : (
							<Stack>
								<Skeleton height="125px" />
								<Skeleton height="125px" />
								<Skeleton height="125px" />
							</Stack>
						)}
					</Box>
					<CreateTodoModal isOpen={isCreateModalOpen} onClose={handleCloseModal} />
				</Box>
			)}
		</>
	);
}
