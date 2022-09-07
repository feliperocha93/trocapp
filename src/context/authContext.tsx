import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(undefined);

function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      //TODO: Check on api if token is valid
      const user = jwt_decode(token);
      setUser(user);
    } else {
      router.push('/login');
    }
  }, [router])

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthProvider() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthProvider must be used within a AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuthProvider };
