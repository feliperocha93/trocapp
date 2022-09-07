import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useAuthProvider } from '../context/authContext';

const useLogin = () => {
  const { setUser } = useAuthProvider()
  const router = useRouter();

  const login = async (event: React.FormEvent<HTMLFormElement>): Promise<void | string> => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const { data: { token } } = await axios.post(
        `http://localhost:3000/api/login?email=${data.get('email')}&password=${data.get('password')}`
      );
      localStorage.setItem('token', token);
      const user = jwt_decode(token);
      setUser(user);
      router.push('/');
    } catch (err) {
      return err.response.data.error;
    }
  };

  // TODO: Implements this methods
  const logout = () => {
    // 1. Remove token
    // 2. Clean user object On AuthProvider
    // 3. Redirect to '/login' page
  }

  return { login, logout };
}

export default useLogin;

