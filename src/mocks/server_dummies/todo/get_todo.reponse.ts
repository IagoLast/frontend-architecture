import IGetTodoResponse from '@/types/server/todos';

export const get_todo_response: IGetTodoResponse = {
	todo: {
		id: '1',
		title: 'Undestand folder structure',
		description: 'Understand the folder structure of the project',
		completed: false,
	},
};
