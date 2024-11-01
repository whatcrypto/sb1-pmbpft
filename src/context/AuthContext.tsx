import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {}
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      const session = localStorage.getItem('session');
      setIsAuthenticated(!!session);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('session', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('session');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);