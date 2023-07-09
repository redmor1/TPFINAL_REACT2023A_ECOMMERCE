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

  // TODO: quizas puedo rehacer metiendo el state filter en useQuery?

  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery(QUERY_KEY_PRODUCTS, () => {
    return fetchData(API_URL, location.pathname, filter);
  });

  // TODO: Probar si con un if(filter == location.search) puedo deshacerme de un useEffect

  // Preguntar al profe si esta bien, este useEffect cambia el state de filter cuando location cambia...
  // location cambia cuando se hace click en una categoria
  useEffect(() => {
    setFilter(location.search);
  }, [location]);

  // cuando se termina de hacer el setFilter(xq es async) esto ejecuta un refetch de la informacion
  useEffect(() => {
    refetch();
  }, [filter]);

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
