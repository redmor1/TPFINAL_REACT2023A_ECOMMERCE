import { useMutation } from "react-query";

function useCreateProduct() {
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
          throw new Error(res.statusText);
        }
        return res.json();
      });
    },
    {
      onSuccess: () => {},
    },
    {
      onError: () => {
        // TODO: do something
      },
    }
  );

  return createProductMutation;
}

export default useCreateProduct;
