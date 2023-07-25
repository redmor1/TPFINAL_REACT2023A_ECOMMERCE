import { useMutation } from "react-query";
import { useParams } from "react-router-dom";

function useEditCategory(setError, setSuccess) {
  const { id } = useParams();
  const editCategoryMutation = useMutation(
    (data) => {
      return fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "PUT",
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
        setSuccess("Category edited successfully");
      },
    },
    {
      onError: (json) => {
        setError(json.message);
      },
    }
  );

  return editCategoryMutation;
}

export default useEditCategory;
