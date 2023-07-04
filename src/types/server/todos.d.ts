import ITodo from '@/types/ITodo';

export interface IListTodoResponse {
	todos: ITodo[];
}

export default interface IGetTodoResponse {
	todo: ITodo;
}
