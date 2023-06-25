import { Box, Flex, Icon, Image, useColorModeValue } from '@chakra-ui/react';
import { BiHome, BiTask } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
	return (
		<Box
			minH={{
				base: 'auto',
				md: '100vh',
			}}
			w={{ base: 'full', md: 60 }}
			bg={useColorModeValue('white', 'gray.900')}
			borderRightWidth={{
				base: 0,
				md: 1,
			}}
			borderRightColor={{
				base: 'transparent',
				md: useColorModeValue('gray.200', 'gray.700'),
			}}
			h={{
				base: 'auto',
				md: '100%',
			}}
			borderBottomColor={{
				base: useColorModeValue('gray.200', 'gray.700'),
				md: 'transparent',
			}}
			borderBottomWidth={{
				base: 1,
				md: 0,
			}}
		>
			<Flex
				h="20"
				alignItems="center"
				mx="10"
				justifyContent="space-between"
				p={10}
				maxW="200"
				margin="auto"
			>
				<Image src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-4.png" />
			</Flex>

			<NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
				<Flex
					align="center"
					px={4}
					py={3}
					my={2}
					mx="4"
					borderRadius="lg"
					role="group"
					cursor="pointer"
					_hover={{ bg: 'purple.600', color: 'white' }}
				>
					<Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={BiHome} />
					Dashboard
				</Flex>
			</NavLink>

			<NavLink to="/dashboard/todos">
				<Flex
					align="center"
					px={4}
					py={3}
					my={2}
					mx="4"
					borderRadius="lg"
					role="group"
					cursor="pointer"
					_hover={{ bg: 'purple.600', color: 'white' }}
				>
					<Icon mr="4" fontSize="16" _groupHover={{ color: 'white' }} as={BiTask} />
					Todos
				</Flex>
			</NavLink>
		</Box>
	);
}
