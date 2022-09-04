import { FormHelperText } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface LoginFormProps {
  error: string,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function LoginForm( { error, handleSubmit } : LoginFormProps) {
  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Senha"
        name="password"
        type="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 2, mb: 1 }}
      >
        Entrar
      </Button>
      { error &&
        <FormHelperText error sx={{textAlign: 'center', fontSize: '16px'}}>
          <span>{error}</span>
        </FormHelperText>
      }
    </Box>
  );
}

export default LoginForm;
