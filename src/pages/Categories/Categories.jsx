import Category from "./components/Category";
import { API_URL, QUERY_KEY_CATEGORIES } from "../../constants/";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { useQuery } from "react-query";
import fetchData from "../../functions/fetchData";
import { useLocation } from "react-router-dom";

function Categories() {
  const location = useLocation();
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
  } = useQuery(QUERY_KEY_CATEGORIES, () => {
    return fetchData(API_URL, location.pathname);
  });

  return (
    <div className="container-fluid justify-content-evenly row my-5 mx-auto">
      <div className="row">
        {isLoading && <Loader />}
        {isError && <Error />}
        {isSuccess &&
          categories.map((category) => {
            return (
              // TODO: CategoryList
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Categories;
