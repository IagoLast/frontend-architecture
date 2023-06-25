import App from '@/App';
import { dummy_login_response } from '@/mocks/server_dummies/auth/get_user_info.response';
import { stubJSONResponse } from '@apto-payments/test-server';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<AuthPage />', () => {
	test('it should do a login when the user enters the correct credentials', async () => {
		stubJSONResponse({
			method: 'post',
			path: '/login',
			response: dummy_login_response,
		});
		window.history.pushState({}, '', '/auth');

		render(<App />);

		await waitFor(() => {
			expect(screen.getByLabelText('Username')).toBeVisible();
		});

		userEvent.type(screen.getByLabelText('Username'), 'dummy_username');
		userEvent.type(screen.getByLabelText('Password'), 'dummy_password');
		userEvent.click(screen.getByRole('button', { name: /Log in/i }));

		return waitFor(() => {
			expect(screen.getByText('info@iagolast.dev')).toBeVisible();
		});
	});
});
