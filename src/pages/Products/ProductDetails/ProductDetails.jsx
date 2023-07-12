import Error from "../../../components/Error/Error";
import Loader from "../../../components/Loader/Loader";
import ProductInfo from "./ProductInfo";
import { API_URL, QUERY_KEY_PRODUCTS } from "../../../constants";
import fetchData from "../../../functions/fetchData";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id: productId } = useParams();

  // Colocate state?
  const {
    data: product,
    isLoading,
    isError,
    isSuccess,
  } = useQuery([QUERY_KEY_PRODUCTS, productId], () => {
    return fetchData(API_URL, location.pathname);
  });

  // TODO: no funciona el error handler cuando la id es incorrecta, el server responde con 400 bad request, el error de peticion si funciona, este no
  //   {
  //     "path": "/api/v1/products/100/?offset=0&limit=10",
  //     "timestamp": "2023-07-11T17:33:24.670Z",
  //     "name": "EntityNotFoundError",
  //     "message": "Could not find any entity of type \"Product\" matching: {\n    \"relations\": [\n        \"category\"\n    ],\n    \"where\": {\n        \"id\": 100\n    }\n}"
  // }

  return (
    <>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          {isLoading && <Loader />}
          {isError && <Error />}
          {isSuccess && <ProductInfo product={product} />}
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
