import React, { createContext, useState, ReactNode } from 'react';

// define os tipos do contexto de autenticação
interface AuthContextProps {
  isLoggedIn: boolean; // estado da autenticação
  login: () => void; 
  logout: () => void; 
}

// cria o contexto de autenticação
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// define as propriedades do provedor da autenticação
interface AuthProviderProps {
  children: ReactNode; 
}

// Provedor de autenticação
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Estado inicial da autenticação

  // função para realizar login
  const login = () => {
    setIsLoggedIn(true);
  };

  // logout
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
