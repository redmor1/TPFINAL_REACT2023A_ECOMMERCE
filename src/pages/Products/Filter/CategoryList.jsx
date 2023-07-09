import { useQuery } from "react-query";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../../constants/";
import CategoryItem from "./CategoryItem";
import fetchData from "../../../functions/fetchData";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryList() {
  // TODO: Refactorizar, dificil de entender a simple vista, podria ser un custom hook
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const categoryId = searchParams.get("categoryId");
  const [categoryChecked, setCategoryChecked] = useState(categoryId);

  function handleCategoryChecked(event) {
    const newCategoryId = event.target.value;
    setCategoryChecked(newCategoryId);
    searchParams.set("categoryId", newCategoryId);
    navigate(`?${searchParams.toString()}`);
  }

  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, "categories");
  });

  return (
    <>
      <h2 className="categories-title fw-bold mb-3">Categories</h2>
      <ul className="d-flex flex-column p-0">
        {isLoading && <Loader />}
        {isError && <Error />}
        {isSuccess &&
          categories.map((category) => {
            return (
              <CategoryItem
                handleCategoryChecked={handleCategoryChecked}
                categoryChecked={categoryChecked}
                key={category.id}
                id={category.id}
                name={category.name}
              />
            );
          })}
      </ul>
    </>
  );
}

export default CategoryList;
