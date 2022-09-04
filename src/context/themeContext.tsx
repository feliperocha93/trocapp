import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#ad6980',
      main: '#8F002C',
      dark: '#46001d',
    },
    secondary: {
      light: '#f7f4f2',
      main: '#e5e1dd',
      dark: '#bab3ad',
    }
  }
});

function TrocappThemeProvider({ children }) {
  return(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export { TrocappThemeProvider };
