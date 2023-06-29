import App from '@/App';
import { dummy_login_response } from '@/mocks/server_dummies/auth/get_user_info.response';
import authService from '@/services/auth.service';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<IndexPage/>', () => {
	beforeEach(() => {
		authService.login(dummy_login_response.token);
		window.history.pushState({}, '', '/dashboard');
		render(<App />);
	});

	test('should display the logged user', async () => {
		return waitFor(() => {
			expect(screen.getByText('info@iagolast.dev')).toBeVisible();
		});
	});

	test('should allow the user to logout', async () => {
		await waitFor(() => {
			expect(screen.getByRole('button', { name: /Log out/i })).toBeVisible();
		});

		userEvent.click(screen.getByRole('button', { name: /Log out/i }));

		return waitFor(() => {
			expect(authService.isAuthenticated()).toBeFalsy();
			expect(window.location.pathname).toBe('/auth');
			expect(screen.getByRole('button', { name: 'Log in' })).toBeVisible();
		});
	});
});
