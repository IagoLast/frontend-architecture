import { RouteObject } from 'react-router-dom';
import TodoListPage from './todo-list.page';

export const dashboardTodoListRoute: RouteObject = {
	path: 'todos',
	Component: TodoListPage,
};
