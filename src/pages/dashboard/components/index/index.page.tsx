import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { useIndexPage } from './index.controller';

export default function DashboardIndexPage() {
	const { logout, token } = useIndexPage();

	return (
		<Box p={16}>
			<Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
				<Heading
					fontWeight={600}
					fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
					lineHeight={'110%'}
				>
					Todo app build with <br />
					<Text as={'span'} color={'green.400'}>
						recursive architecture
					</Text>
				</Heading>
				<Text color={'gray.500'}>{token.email}</Text>
				<Stack
					direction={'column'}
					spacing={3}
					align={'center'}
					alignSelf={'center'}
					position={'relative'}
				>
					<Button colorScheme={'purple'} rounded={'full'} px={6} onClick={logout}>
						Log out
					</Button>
				</Stack>
			</Stack>
		</Box>
	);
}
