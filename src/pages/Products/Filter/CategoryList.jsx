import { useQuery } from "react-query";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../../constants/";
import CategoryItem from "./CategoryItem";
import fetchData from "../../../functions/fetchData";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import { useNavigate } from "react-router-dom";

function CategoryList(props) {
  // TODO: Refactorizar, dificil de entender a simple vista, podria ser un custom hook
  const navigate = useNavigate();

  function handleCategoryChecked(event) {
    const newCategoryId = event.target.value;
    if (newCategoryId === props.categoryChecked) {
      props.setCategoryChecked(null);
      props.searchParams.delete("categoryId");
    } else {
      props.setCategoryChecked(newCategoryId);
      props.searchParams.set("categoryId", newCategoryId);
    }
    navigate(`?${props.searchParams.toString()}`);
  }

  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, "/categories");
  });

  return (
    <div className="mb-4">
      <p className="filters-title fw-bold">Categories</p>
      <ul className="d-flex flex-column p-0">
        {isLoading && <Loader />}
        {isError && <Error />}
        {isSuccess &&
          categories.map((category) => {
            return (
              <CategoryItem
                handleCategoryChecked={handleCategoryChecked}
                categoryChecked={props.categoryChecked}
                key={category.id}
                id={category.id}
                name={category.name}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default CategoryList;
