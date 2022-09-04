import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

function TrocappThemeProvider({ children }) {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { TrocappThemeProvider };
