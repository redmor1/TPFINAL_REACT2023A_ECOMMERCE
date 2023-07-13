import { API_URL, QUERY_KEY_PRODUCTS } from "../../constants/";
import Filter from "./Filter/Filter";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import ProductList from "./components/ProductList";
import { useQuery } from "react-query";
import fetchData from "../../functions/fetchData";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Products() {
  const location = useLocation();
  const [filter, setFilter] = useState();
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery([QUERY_KEY_PRODUCTS, filter], () => {
    return fetchData(API_URL, location.pathname, filter);
  });

  if (filter != location.search) {
    setFilter(location.search);
  }

  return (
    <div className="container-fluid my-5 mx-auto">
      <div className="row justify-content-center">
        <Filter />
        <div className="col-8 flex-wrap d-flex justify-content-evenly">
          {isLoading && <Loader />}
          {isError && <Error />}
          {isSuccess && <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}

export default Products;
