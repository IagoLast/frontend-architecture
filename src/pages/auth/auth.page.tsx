import { Box, Button, Container, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useAuthPage } from './auth.controller';

export default function AuthPage() {
	const { form, handleSubmit } = useAuthPage();

	return (
		<Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
			<Stack spacing="8">
				<Box
					py={{ base: '0', sm: '8' }}
					px={{ base: '4', sm: '10' }}
					bg={{ base: 'transparent', sm: 'bg.surface' }}
					boxShadow={{ base: 'none', sm: 'md' }}
					borderRadius={{ base: 'none', sm: 'xl' }}
				>
					<Stack as="form" onSubmit={handleSubmit} spacing="6">
						<Stack spacing="5">
							<FormControl>
								<FormLabel htmlFor="username">Username</FormLabel>
								<Input {...form.register('username')} id="username" type="text" />
							</FormControl>
							<FormControl>
								<FormLabel htmlFor="password">Password</FormLabel>
								<Input {...form.register('password')} id="password" type="password" />
							</FormControl>
						</Stack>

						<Stack spacing="6">
							<Button type="submit" isLoading={form.formState.isSubmitting}>
								Log in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Container>
	);
}
