import { createContext, useState } from "react";
import { ACCESS_TOKEN } from "../constants/index";

export let AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("access_token")
  );

  function login(userData, callback) {
    setUserToken(userData);
    localStorage.setItem(ACCESS_TOKEN, JSON.stringify(userData));
    callback();
  }

  function logout(callback) {
    setUserToken(null);
    localStorage.removeItem("access_token");
    callback();
  }

  const value = { userToken, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
