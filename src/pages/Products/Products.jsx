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
    <>
      <div
        className="bg-dark d-flex justify-content-center"
        style={{ height: "215px" }}
      >
        <div className="col-10 shop-div">
          <h1 className="shop-title">Shop Men&apos;s</h1>
          <p className="shop-description col-lg-6 col-md-7 col-sm-10 col-11">
            Revamp your style with the latest designer trends in men’s clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.
          </p>
        </div>
      </div>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          <Filter />
          <div className="col-xl-8 col-lg-7 col-md-11 col-sm-11 flex-wrap d-flex justify-content-evenly">
            {isLoading && <Loader />}
            {isError && <Error />}
            {isSuccess && <ProductList products={products} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
