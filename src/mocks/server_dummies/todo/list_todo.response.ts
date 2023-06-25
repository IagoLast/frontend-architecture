import IListTodoResponse from '@/types/server/IListTodoResponse';

export const list_todo_response: IListTodoResponse = {
	todos: [
		{
			id: 1,
			title: 'Undestand folder structure',
			description: 'Understand the folder structure of the project',
			completed: false,
		},
		{
			id: 2,
			title: 'Read documentation',
			description: 'Read the documentation of the project',
			completed: false,
		},
		{
			id: 3,
			title: 'Buy the frontend architecture book',
			description: 'Buy the book and learn how to build SPA apps using React',
			completed: false,
		},
	],
};
