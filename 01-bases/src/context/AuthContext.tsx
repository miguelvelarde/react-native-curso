import {
  createContext,
  useContext,
  type PropsWithChildren,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "Checking" = "Checking", // = 0
  "Authenticated" = "Authenticated", // = 1
  "Unauthenticated" = "Unauthenticated", // = 2
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;
  isChecking: boolean;
  isAuthenticated: boolean;

  //metodos
  loginWithEmailAndPassword: (
    name: string,
    email: string,
    password: string
  ) => void;

  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.Checking);

  const [user, setUser] = useState<User>();

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.Unauthenticated);
    }, 5000);
  }, []);

  const loginWithEmailAndPassword = (
    name: string,
    email: string,
    password: string
  ) => {
    setUser({
      name: name,
      email: email,
    });

    if (email === "" || name === "") {
      setStatus(AuthStatus.Unauthenticated);
    } else {
      setStatus(AuthStatus.Authenticated);
    }
  };

  const logout = () => {
    setUser(undefined);
    setStatus(AuthStatus.Unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,
        isChecking: status === AuthStatus.Checking,
        isAuthenticated: status === AuthStatus.Authenticated,

        //metodo o accion
        loginWithEmailAndPassword,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
