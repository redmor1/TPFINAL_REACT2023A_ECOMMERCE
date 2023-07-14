import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.userToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
