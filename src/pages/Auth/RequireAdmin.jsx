import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function RequireAdmin({ children }) {
  //   const auth = useAuth();
  //   const location = useLocation();

  // TODO: check the user role using auth
  // if () {
  //   return <Navigate to="/login" state={{ from: location }} replace />;
  // }

  return children;
}

export default RequireAdmin;
