import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  let auth = useContext(AuthContext);
  const navigate = useNavigate();

  if (auth.user) {
    navigate("/");
  }

  return children;
}

export default RequireAuth;
