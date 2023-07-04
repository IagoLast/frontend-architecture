import App from '@/App';
import { dummy_login_response } from '@/mocks/server_dummies/auth/get_user_info.response';
import { list_todo_response } from '@/mocks/server_dummies/todo/list_todo.response';
import authService from '@/services/auth.service';
import { stubJSONResponse } from '@apto-payments/test-server';
import { render, screen, waitFor } from '@testing-library/react';

describe('<TodoDetailsPage/>', () => {
	test('should display a list of todos from the server', async () => {
		stubJSONResponse({
			path: '/todos',
			response: list_todo_response,
		});
		authService.login(dummy_login_response.token);
		window.history.pushState({}, '', '/dashboard/todos');
		render(<App />);

		return waitFor(() => {
			expect(screen.getByText(list_todo_response.todos[0].title)).toBeVisible();
			expect(screen.getByText(list_todo_response.todos[1].title)).toBeVisible();
			expect(screen.getByText(list_todo_response.todos[2].title)).toBeVisible();
		});
	});
});
