import { authHandler } from './handlers/auth.handler';
import { todoHandler } from './handlers/todo.handler';

export const handlers = [...authHandler, ...todoHandler];
