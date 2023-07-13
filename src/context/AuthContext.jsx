import { createContext, useState } from "react";
import { ACCESS_TOKEN } from "../constants/index";

export let AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("access_token"));

  function login(userData, callback) {
    setUser(userData);
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(userData.access_token));
    callback();
  }

  function logout(callback) {
    setUser(null);
    localStorage.removeItem("access_token");
    callback();
  }

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
