import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar.component';

export default function DashboardPage() {
	return (
		<>
			<Container
				maxW="container.xl"
				display="grid"
				gridTemplateRows={{
					base: '1fr auto',
					md: '1fr',
				}}
				gridTemplateColumns={{
					base: '1fr',
					md: 'auto 1fr',
				}}
			>
				<Sidebar />
				<Outlet />
			</Container>
		</>
	);
}
