import { useMutation } from "react-query";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();
  const auth = useAuth();

  const loginMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    },
    {
      onSuccess: (userData) => {
        auth.login(userData, () => {
          navigate("/");
        });
      },
    }
  );

  return loginMutation;
}

export default useLogin;
