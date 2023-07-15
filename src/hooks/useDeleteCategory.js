import { useMutation } from "react-query";

function useDeleteCategory() {
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
