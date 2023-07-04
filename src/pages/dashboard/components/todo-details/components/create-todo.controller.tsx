import { useCreateTodoMutation } from '@/queries/todo.queries';
import ITodo from '@/types/ITodo';
import { useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

interface IUseCreateTodoModalArgs {
	onClose: () => void;
}

export function useCreateTodoModal(args: IUseCreateTodoModalArgs) {
	const toast = useToast();
	const createTodoMutation = useCreateTodoMutation();

	const form = useForm<ITodo>({
		defaultValues: {
			id: crypto.randomUUID(),
			title: '',
			description: '',
			completed: false,
		},
	});

	const handleSubmit = form.handleSubmit((values) => {
		return createTodoMutation
			.mutateAsync({ todo: values })
			.then(() => {
				toast({ title: 'Todo created', status: 'success' });
				args.onClose();
				form.reset();
			})
			.catch(() => {
				toast({ title: 'Something went wrong', status: 'error' });
			});
	});

	return {
		form,
		handleSubmit,
	};
}
