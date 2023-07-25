import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY_CATEGORIES } from "../constants";

function useDeleteCategory() {
  const queryClient = useQueryClient();
  const deleteCategoryMutation = useMutation(
    (id) => {
      return fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
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
        queryClient.invalidateQueries(QUERY_KEY_CATEGORIES);
      },
    },
    {
      onError: () => {
        // TODO: do something
      },
    }
  );

  return deleteCategoryMutation;
}

export default useDeleteCategory;
