import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuthProvider } from '../context/authContext';

const useLogin = () => {
  const { setToken } = useAuthProvider()
  const router = useRouter();

  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/login?email=${data.get('email')}&password=${data.get('password')}`
      );
      setToken(response.data.token);
      router.push('/');
    } catch (err) {
      return err.response.data.error;
    }
  };

  return login;
}

export default useLogin;

