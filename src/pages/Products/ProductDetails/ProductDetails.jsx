import Error from "../../../components/Error/Error";
import Loader from "../../../components/Loader/Loader";
import ProductInfo from "./ProductInfo";
import { API_URL, QUERY_KEY_PRODUCTS } from "../../../constants";
import fetchData from "../../../functions/fetchData";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    isSuccess,
  } = useQuery([QUERY_KEY_PRODUCTS, productId], () => {
    return fetchData(API_URL, location.pathname);
  });

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
