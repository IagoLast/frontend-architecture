import { RouteObject, redirect } from 'react-router-dom';
import { authRoute } from './pages/auth/auth.route';
import { dashboardRoute } from './pages/dashboard/dashboard.route';

export const router: RouteObject[] = [
	{
		Component: () => <></>,
		path: '/',
		loader() {
			return redirect('/dashboard');
		},
	},
	authRoute,
	dashboardRoute,
];
