import { authRoute } from '@/pages/auth/auth.route';
import authService from '@/services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useIndexPage() {
	const navigate = useNavigate();
	const [token] = useState(() => {
		const user = authService.getIdToken();
		if (!user) {
			return;
		}
		const jwtToken = decodeJwt(user);
		return jwtToken;
	});

	function logout() {
		console.info('logout');
		authService.logout();
		navigate(authRoute.path!);
	}

	return {
		logout,
		token,
	};
}

function decodeJwt(jwtToken: string) {
	const base64Url = jwtToken.split('.')[1];
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	const jsonPayload = decodeURIComponent(
		atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}
