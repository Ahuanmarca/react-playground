import React from "react";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = React.useState(false);

  function login() {
    setIsLogged(true);
  }

  function logout() {
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };