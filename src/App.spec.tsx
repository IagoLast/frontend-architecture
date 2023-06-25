import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';
import { dummy_login_response } from './mocks/server_dummies/auth/get_user_info.response';
import authService from './services/auth.service';

describe('<App />', () => {
	test('should redirect to login when the user is not authenticated', () => {
		authService.logout();
		window.history.pushState({}, '', '/');

		render(<App />);

		return waitFor(() => {
			expect(window.location.pathname).toEqual('/auth');
		});
	});

	test('should redirect to dashboard when the user is no', () => {
		authService.login(dummy_login_response.token);
		window.history.pushState({}, '', '/');

		render(<App />);

		return waitFor(() => {
			expect(window.location.pathname).toEqual('/dashboard');
			expect(screen.getByText('info@iagolast.dev')).toBeVisible();
		});
	});
});
