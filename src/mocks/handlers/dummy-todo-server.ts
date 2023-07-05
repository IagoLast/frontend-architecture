import ITodo from '@/types/ITodo';

const todos = JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>;

async function listTodos(): Promise<Array<ITodo>> {
	return todos;
}

async function getTodo(id: string): Promise<ITodo | undefined> {
	return todos.find((todo) => todo.id === id);
}

async function updateTodo(todo: ITodo): Promise<void> {
	const index = todos.findIndex((t) => t.id === todo.id);
	if (index === -1) {
		todos.push(todo);
	}
	todos[index] = todo;
}

export default {
	listTodos,
	getTodo,
	updateTodo,
};
