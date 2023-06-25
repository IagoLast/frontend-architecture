import authService from '@/services/auth.service';
import { RouteObject, redirect } from 'react-router-dom';
import AuthPage from './auth.page';

export const authRoute: RouteObject = {
	path: '/auth',
	Component: AuthPage,
	loader() {
		if (authService.isAuthenticated()) {
			return redirect('/dashboard');
		}
		return null;
	},
};
