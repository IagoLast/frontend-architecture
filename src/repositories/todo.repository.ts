import client from '@/client/client';
import ITodo from '@/types/ITodo';
import IListTodoResponse from '@/types/server/IListTodoResponse';

function list(): Promise<IListTodoResponse> {
	return client.get('/todos').then((res) => res.data);
}

interface ICreateArgs {
	todo: ITodo;
}

function create(args: ICreateArgs) {
	return client.put(`/todos/${args.todo.id}`, args.todo).then((res) => res.data);
}

export default {
	list,
	create,
};
