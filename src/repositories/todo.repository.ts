import client from '@/client/client';
import IListTodoResponse from '@/types/server/IListTodoResponse';

function list(): Promise<IListTodoResponse> {
	return client.get('/todos').then((res) => res.data);
}

export default {
	list,
};
