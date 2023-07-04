import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
} from '@chakra-ui/react';
import { useCreateTodoModal } from './create-todo.controller';

interface ICreateTodoModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CreateTodoModal(props: ICreateTodoModalProps) {
	const { handleSubmit, form } = useCreateTodoModal(props);

	return (
		<Modal isOpen={props.isOpen} onClose={props.onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create a new Todo</ModalHeader>
				<ModalCloseButton />
				<ModalBody id="create-todo-form" as="form" onSubmit={handleSubmit}>
					<FormControl>
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
				</ModalBody>

				<ModalFooter>
					<Button
						mr={2}
						isDisabled={form.formState.isSubmitting}
						onClick={props.onClose}
						variant="ghost"
					>
						Close
					</Button>

					<Button
						isLoading={form.formState.isSubmitting}
						isDisabled={!form.formState.isValid}
						form="create-todo-form"
						type="submit"
						colorScheme="purple"
						mr={3}
					>
						Create
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
