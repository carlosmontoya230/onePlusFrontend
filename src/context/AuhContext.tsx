import React, { useState, useMemo, ReactNode, useEffect } from "react";

const AuthContext = React.createContext<{
  authState: AuthState;
  setAuthState: (e: AuthState) => void;
}>({
  authState: {
    isAuthenticated: false,
    user: null,
  },
  setAuthState: () => {},
});

const token = localStorage.getItem("token");
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    if (token) {
      setAuthState({
        isAuthenticated: true,
        user: "mario",
      });
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      authState,
      setAuthState,
    }),
    [authState]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export { AuthContext, AuthProvider, AuthConsumer };
