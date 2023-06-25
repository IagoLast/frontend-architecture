import { useLoginMutation } from '@/queries/auth.queries';
import authService from '@/services/auth.service';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export function useAuthPage() {
	const navigate = useNavigate();
	const loginMutation = useLoginMutation();

	const form = useForm({
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const handleSubmit = form.handleSubmit((data) => {
		console.warn(data);
		return loginMutation.mutateAsync(data).then((res) => {
			authService.login(res.token);
			navigate('/dashboard');
		});
	});

	return {
		form,
		handleSubmit,
	};
}
