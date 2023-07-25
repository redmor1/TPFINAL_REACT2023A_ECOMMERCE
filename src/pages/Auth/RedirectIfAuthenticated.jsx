import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RedirectIfAuthenticated({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.isLoading) {
    return null;
  }

  if (auth.userInfo && auth.userInfo.isUserValid) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default RedirectIfAuthenticated;
