import { createContext, useState } from "react";
import { ACCESS_TOKEN, API_URL, QUERY_KEY_USER } from "../constants/index";
import fetchUser from "../functions/fetchUser";
import { useQuery } from "react-query";

export let AuthContext = createContext();

export function AuthProvider({ children }) {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("access_token")
  );

  const {
    data: userInfo,
    isLoading,
    isError,
  } = useQuery(
    [QUERY_KEY_USER, userToken],
    () => fetchUser(API_URL, "/auth/profile", userToken),
    {
      enabled: !!userToken,
    }
  );

  function login(userData, callback) {
    const userDataString = JSON.stringify(userData);
    setUserToken(userDataString);
    localStorage.setItem(ACCESS_TOKEN, userDataString);
    callback();
  }

  function logout(callback) {
    setUserToken(null);
    localStorage.removeItem("access_token");
    callback();
  }

  const value = { userToken, userInfo, isLoading, isError, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
