import { list_todo_response } from '@/mocks/server_dummies/todo/list_todo.response';
import { rest } from 'msw';
import { get_todo_response } from '../server_dummies/todo/get_todo.reponse';

export const todoHandler = [
	rest.get('/todos', (_, res, ctx) => {
		return res(ctx.json(list_todo_response), ctx.delay(2000));
	}),

	rest.get('/todos/:id', (_, res, ctx) => {
		return res(ctx.json(get_todo_response), ctx.delay(500));
	}),

	rest.put('/todos/:id', (_, res, ctx) => {
		return res(ctx.json({}), ctx.delay(500));
	}),
];
