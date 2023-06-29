import App from '@/App';
import { dummy_login_response } from '@/mocks/server_dummies/auth/get_user_info.response';
import { list_todo_response } from '@/mocks/server_dummies/todo/list_todo.response';
import authService from '@/services/auth.service';
import { stubJSONResponse } from '@apto-payments/test-server';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from 'node_modules/@testing-library/user-event';

describe('<TodoListPage/>', () => {
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

	test('should allow users to create new todos', async () => {
		// Simulate server responses
		stubJSONResponse({
			method: 'get',
			path: '/todos',
			response: list_todo_response,
		});
		const spy = stubJSONResponse({
			method: 'put',
			path: '/todos/:id',
			response: {},
		});
		// Simulate a logged user
		authService.login(dummy_login_response.token);
		// Navigate to the todo list page
		window.history.pushState({}, '', '/dashboard/todos');
		// Render the aplication
		render(<App />);
		// Wait for the todos to be displayed
		await waitFor(() => {
			expect(screen.getByText(list_todo_response.todos[0].title)).toBeVisible();
		});
		// Click on the "Add Todo" button
		await userEvent.click(screen.getByRole('button', { name: /Add Todo/i }));
		// Wait for the add-todo modal to be displayed
		await waitFor(() => {
			expect(screen.getByRole('dialog', { name: /Create a new Todo/i })).toBeVisible();
		});
		// Fill the form
		await userEvent.type(screen.getByLabelText(/Title/i), 'dummy_todo_title');
		await userEvent.type(screen.getByLabelText(/Description/i), 'dummy_todo_description');
		// Ensure the server has not been called yet (this is a sanity check!)
		expect(spy).not.toHaveBeenCalled();
		// Click on the "Create" button
		await userEvent.click(screen.getByRole('button', { name: /Create/i }));
		// Wait for the server to be called (TODO: This should check that the server has been called with the correct data!)
		return waitFor(() => {
			expect(spy).toHaveBeenCalled();
		});
	});
});
