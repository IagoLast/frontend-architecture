function login(token: string) {
	localStorage.setItem('token', token);
}

function logout() {
	localStorage.removeItem('token');
}

function isAuthenticated() {
	const value = localStorage.getItem('token');
	return value !== null;
}

function getIdToken(): string | null {
	return localStorage.getItem('token');
}

export default {
	getIdToken,
	isAuthenticated,
	login,
	logout,
};
