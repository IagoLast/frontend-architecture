import { RouteObject } from 'react-router-dom';
import DashboardPage from './todo-list.page';

export const dashboardTodoListRoute: RouteObject = {
	path: 'todos',
	Component: DashboardPage,
};
