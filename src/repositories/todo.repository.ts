import client from '@/client/client';
import ITodo from '@/types/ITodo';
import IGetTodoResponse, { IListTodoResponse } from '@/types/server/todos';

function list(): Promise<IListTodoResponse> {
	return client.get('/todos').then((res) => res.data);
}

interface ICreateArgs {
	todo: ITodo;
}

function create(args: ICreateArgs) {
	return client.put(`/todos/${args.todo.id}`, args.todo).then((res) => res.data);
}

interface IGetArgs {
	id: string;
}

function get(args: IGetArgs): Promise<IGetTodoResponse> {
	return client.get(`/todos/${args.id}`).then((res) => res.data);
}

interface IUpdateArgs {
	todo: ITodo;
}

function update(args: IUpdateArgs): Promise<void> {
	return client.put(`/todos/${args.todo.id}`, args.todo).then((res) => res.data);
}

export default {
	create,
	get,
	list,
	update,
};
