import { TODO_DETAILS_ROUTE } from '@/constants/routes';
import { queryClient } from '@/queries/queryClient';
import todoRepository from '@/repositories/todo.repository';
import { RouteObject } from 'react-router-dom';
import todoDetailsPage from './todo-details.page';

export const dashboardTodoDetailsRoute: RouteObject = {
	path: TODO_DETAILS_ROUTE,
	Component: todoDetailsPage,

	loader({ params }) {
		return queryClient.fetchQuery({
			queryKey: ['todo', 'details', { id: params.id! }],
			queryFn: () => todoRepository.get({ id: params.id! }),
		});
	},
};
