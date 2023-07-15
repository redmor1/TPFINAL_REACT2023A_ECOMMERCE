import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

function useEditProduct() {
  const { id } = useParams();

  const editProductMutation = useMutation(
    (data) => {
      return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "PUT",
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

  return editProductMutation;
}

export default useEditProduct;
