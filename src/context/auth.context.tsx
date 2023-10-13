import { User, onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useMemo, useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';
import { auth } from 'src/firebase';
import { useRouter } from 'next/router';

interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: '',
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const {
    error,
    isLoading,
    logout,
    signIn,
    signUp,
    user,
    setUser,
    setIsLoading,
  } = useAuth();

  const router = useRouter();

  const value = useMemo(
    () => ({
      error,
      isLoading,
      logout,
      signIn,
      signUp,
      user,
    }),
    // eslint-disable-next-line
    [user, isLoading, error]
  );

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false);

          setUser(user);
        } else {
          setUser(null);
          setIsLoading(true);
          router.push('/auth');
        }
        setIsLoading(false);
        setInitialLoader(false);
      }),
    // eslint-disable-next-line
    []
  );

  return (
    <AuthContext.Provider value={value}>
      {!initialLoader ? children : 'Loader...'}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
