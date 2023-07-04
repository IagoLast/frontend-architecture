import authService from '@/services/auth.service';
import { RouteObject, redirect } from 'react-router-dom';
import { authRoute } from '../auth/auth.route';
import { dashboardIndexRoute } from './components/index/index.route';
import { dashboardTodoDetailsRoute } from './components/todo-details/todo-details.route';
import { dashboardTodoListRoute } from './components/todo-list/todo-list.route';
import DashboardPage from './dashboard.page';

export const dashboardRoute: RouteObject = {
	path: '/dashboard',
	Component: DashboardPage,
	loader: async () => {
		if (!authService.isAuthenticated()) {
			return redirect(authRoute.path!);
		}
		return null;
	},
	children: [dashboardIndexRoute, dashboardTodoListRoute, dashboardTodoDetailsRoute],
};
