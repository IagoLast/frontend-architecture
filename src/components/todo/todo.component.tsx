import { TODO_DETAILS_ROUTE } from '@/constants/routes';
import ITodo from '@/types/ITodo';
import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface ITodoProps {
	todo: ITodo;
}

export default function Todo(props: ITodoProps) {
	const navigate = useNavigate();

	return (
		<Card
			mb={4}
			cursor="pointer"
			_hover={{
				bg: 'gray.50',
			}}
			onClick={() => {
				navigate({ pathname: TODO_DETAILS_ROUTE.replace(':id', props.todo.id) });
			}}
		>
			<CardHeader>
				<Heading size="md" textTransform="uppercase">
					{props.todo.title}
				</Heading>
			</CardHeader>

			<CardBody>
				<Text fontSize="sm">{props.todo.description}</Text>
			</CardBody>
		</Card>
	);
}
