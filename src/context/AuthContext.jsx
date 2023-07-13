import { createContext, useState } from "react";

export let AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();

  function login(userData, callback) {
    setUser(userData);
    callback();
  }

  function logout(callback) {
    setUser(null);
    callback();
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
