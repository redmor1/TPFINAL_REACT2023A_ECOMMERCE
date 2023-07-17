import { useMutation } from "react-query";

function useCreateCategory(setError, setSuccess) {
  const createCategoryMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/categories/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) {
          setError(res.statusText);
          throw new Error(res.statusText);
        }
        return res.json();
      });
    },
    {
      onSuccess: () => {
        setSuccess("Product created successfully");
      },
    },
    {
      onError: (json) => {
        setError(json.message);
      },
    }
  );
  return createCategoryMutation;
}

export default useCreateCategory;
