import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { queryClient } from './queries/queryClient';
import { router } from './router';

export default function App() {
	return (
		<ChakraProvider>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={createBrowserRouter(router)} />
			</QueryClientProvider>
		</ChakraProvider>
	);
}
