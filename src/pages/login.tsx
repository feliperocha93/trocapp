import Image from 'next/image';

import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Logo from '../assets/logo.svg';
import LoginForm from '../components/LoginForm';
import useLogin from '../hooks/useLogin';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthProvider } from '../context/authContext';

function Login() {
  const [loginSubmitError, setLoginSubmitError] = useState('');

  const { user } = useAuthProvider();
  const { login } = useLogin();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    // TODO: Implements a loadder behavior when user is loggins
    const error = await login(e);
    error && setLoginSubmitError(error);
  }

  // TODO: solve the issue -> Use can see login page before redirect
  if (user) return;

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image src={Logo} alt="Trocapp Logo" width={150} />
          <LoginForm handleSubmit={handleSubmit} error={loginSubmitError} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
