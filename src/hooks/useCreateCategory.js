import { useMutation } from "react-query";

function useCreateCategory() {
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
  return createCategoryMutation;
}

export default useCreateCategory;
