import { useUpdateTodoMutation } from '@/queries/todo.queries';
import IGetTodoResponse from '@/types/server/todos';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

export function useTodoDetails() {
	const data = useLoaderData() as IGetTodoResponse;
	const form = useForm({ defaultValues: data.todo });
	const updateTodoMutation = useUpdateTodoMutation();

	const handleSubmit = form.handleSubmit((values) => {
		return updateTodoMutation.mutateAsync({ todo: { ...data.todo, ...values } });
	});

	function handleCompleteClick() {
		return updateTodoMutation.mutateAsync({ todo: { ...data.todo, completed: true } });
	}

	return {
		isLoading: updateTodoMutation.isLoading || form.formState.isLoading,
		form,
		handleSubmit,
		handleCompleteClick,
	};
}
