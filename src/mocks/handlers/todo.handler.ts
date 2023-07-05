import ITodo from '@/types/ITodo';
import { rest } from 'msw';
import dummyTodoServer from './dummy-todo-server';

export const todoHandler = [
	rest.get('/todos', async (_, res, ctx) => {
		const todos = await dummyTodoServer.listTodos();
		return res(ctx.json({ todos }));
	}),

	rest.get('/todos/:id', async (req, res, ctx) => {
		const todo = await dummyTodoServer.getTodo(req.params['id'] as string);
		if (!todo) {
			return res(ctx.status(404));
		}
		return res(ctx.json({ todo }));
	}),

	rest.put('/todos/:id', async (req, res, ctx) => {
		const body = await (req.json() as Promise<ITodo>);

		dummyTodoServer.updateTodo({
			id: body.id,
			completed: body.completed,
			description: body.description,
			title: body.title,
		});

		return res(ctx.json({}), ctx.delay(200));
	}),
];
