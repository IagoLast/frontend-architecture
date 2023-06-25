import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

if (process.env.NODE_ENV === 'development') {
	const { worker } = await import('./mocks/browser');
	worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
