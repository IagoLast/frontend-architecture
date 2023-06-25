import { rest } from 'msw';
import { dummy_login_response } from '../server_dummies/auth/get_user_info.response';

export const authHandler = [
	rest.post('/login', (_, res, ctx) => {
		return res(ctx.json(dummy_login_response), ctx.delay(200));
	}),
];
