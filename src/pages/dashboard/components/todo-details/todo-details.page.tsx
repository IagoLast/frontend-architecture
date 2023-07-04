import {
	Box,
	Button,
	ButtonGroup,
	FormControl,
	FormLabel,
	IconButton,
	Input,
	Textarea,
} from '@chakra-ui/react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTodoDetails } from './todo-details.controller';

export default function TodoDetailsPage() {
	const { form, handleSubmit, handleCompleteClick, isLoading } = useTodoDetails();

	return (
		<Box py={4} px={16} as="form" onSubmit={handleSubmit}>
			<IconButton aria-label="Back" icon={<FaAngleLeft />} as={Link} to={'/dashboard/todos'} />
			<FormControl my={4}>
				<FormLabel htmlFor="title">Title</FormLabel>
				<Input id="title" {...form.register('title', { required: true })} placeholder="Title" />
			</FormControl>

			<FormControl mt={4}>
				<FormLabel htmlFor="description">Description</FormLabel>
				<Textarea
					id="description"
					{...form.register('description', { required: true })}
					placeholder="Write a description"
				/>
			</FormControl>

			<ButtonGroup mt={4}>
				<Button type="submit" isLoading={isLoading}>
					Save changes
				</Button>
				<Button
					onClick={handleCompleteClick}
					type="button"
					isLoading={isLoading}
					isDisabled={form.getValues('completed')}
				>
					Mark as completed
				</Button>
			</ButtonGroup>
		</Box>
	);
}
