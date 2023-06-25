import { list_todo_response } from '@/mocks/server_dummies/todo/list_todo.response';
import { rest } from 'msw';

export const todoHandler = [
	rest.get('/todos', (_, res, ctx) => {
		return res(ctx.json(list_todo_response), ctx.delay(200));
	}),
];
