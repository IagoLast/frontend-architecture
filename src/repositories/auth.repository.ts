import client from '@/client/client';
import ILoginResponse from '@/types/server/ILoginResponse';

interface ILoginArgs {
	username: string;
	password: string;
}

function login(args: ILoginArgs): Promise<ILoginResponse> {
	return client.post('/login', { args }).then((res) => res.data);
}

export default {
	login,
};
