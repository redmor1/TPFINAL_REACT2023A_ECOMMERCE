import { useMutation } from "react-query";

function useCreateProduct(setError, setSuccess) {
  const createProductMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/products/", {
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

  return createProductMutation;
}

export default useCreateProduct;
