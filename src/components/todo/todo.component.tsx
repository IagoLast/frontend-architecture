import ITodo from '@/types/ITodo';
import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';

interface ITodoProps {
	todo: ITodo;
}

export default function Todo(props: ITodoProps) {
	return (
		<Card
			mb={4}
			cursor="pointer"
			_hover={{
				bg: 'gray.50',
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
