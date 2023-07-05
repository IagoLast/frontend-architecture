import { useUpdateTodoMutation } from '@/queries/todo.queries';
import IGetTodoResponse from '@/types/server/todos';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

export function useTodoDetails() {
	const data = useLoaderData() as IGetTodoResponse;

	const form = useForm({ defaultValues: data.todo });
	const updateTodoMutation = useUpdateTodoMutation();

	const handleSubmit = form.handleSubmit((values) => {
		return updateTodoMutation.mutateAsync({ todo: { ...form.getValues(), ...values } }).then(() => {
			form.setValue('title', values.title);
			form.setValue('id', values.id);
			form.setValue('description', values.description);
			form.setValue('completed', values.completed);
		});
	});

	function handleCompleteClick() {
		return updateTodoMutation
			.mutateAsync({ todo: { ...form.getValues(), completed: true } })
			.then(() => {
				form.setValue('completed', true);
			});
	}

	return {
		isLoading: updateTodoMutation.isLoading || form.formState.isLoading,
		form,
		handleSubmit,
		handleCompleteClick,
	};
}
