import axios from "axios";
import { useRouter } from "next/router";
import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext(undefined);

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(true);
  const [users, setUsers] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (
      !authenticated &&
      router.pathname !== '/login' &&
      router.pathname !== '/_error'
    ) {
      router.push('/login');
    }
  }, [authenticated, router])

  useEffect(() => {
    axios.get('http://localhost:3000/api/user/5')
      .then(res => setUsers(res.data))
  }, [])

  return (
    <AuthContext.Provider value={{authenticated, users}}>
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

export {AuthProvider, useAuthProvider};
