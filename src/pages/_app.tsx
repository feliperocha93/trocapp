import { AuthProvider } from "../context/authContext";
import { AppProps } from "next/app";
import { TrocappThemeProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <TrocappThemeProvider>
        <Component {...pageProps} />
      </TrocappThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
