import { API_URL, QUERY_KEY_PRODUCTS } from "../../constants/";
import Filter from "./Filter/Filter";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ProductList from "./components/ProductList";
import { useQuery } from "react-query";
import fetchData from "../../functions/fetchData";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Products() {
  const location = useLocation();
  const [filter, setFilter] = useState(location.search);

  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(QUERY_KEY_PRODUCTS, () => {
    return fetchData(API_URL, location.pathname, filter);
  });

  useEffect(() => {
    refetch();
  }, [location, refetch]);

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row">
        <Filter filter={filter} setFilter={setFilter} />
        <div className="col-9 flex-wrap d-flex justify-content-evenly">
          {isLoading && <Loader />}
          {isError && <Error />}
          {isSuccess && <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}

export default Products;
