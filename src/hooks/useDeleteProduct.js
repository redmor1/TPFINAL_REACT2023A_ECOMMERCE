import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY_PRODUCTS } from "../constants";

function useDeleteProduct() {
  const queryClient = useQueryClient();
  const deleteProductMutation = useMutation(
    (id) => {
      return fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      });
    },
    {
      onSuccess: () => {
        console.log("item eliminado pa");
        queryClient.invalidateQueries(QUERY_KEY_PRODUCTS);
      },
    },
    {
      onError: () => {},
    }
  );

  return deleteProductMutation;
}

export default useDeleteProduct;
