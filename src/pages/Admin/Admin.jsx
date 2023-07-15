import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "../../functions/fetchData";
import { API_URL, QUERY_KEY_PRODUCTS } from "../../constants";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

function Admin() {
  const navigate = useNavigate();

  // fetch products
  const {
    data: products,
    isLoading,
    isError,
    isSuccess,
  } = useQuery([QUERY_KEY_PRODUCTS], () => {
    return fetchData(API_URL, "/products");
  });

  function handleSubmitProduct(e) {
    e.preventDefault();
    const selectedProduct = e.target.selectedProduct.value;
    navigate(`/products/edit/${selectedProduct}`);
  }
  // TODO: refactorize, put some stuff in components
  return (
    <div>
      <h1 className="mb-5">Admin stuff</h1>

      <div className="my-5">
        <h1>Create a product</h1>
        <Link to="/products/create" className="btn btn-primary">
          Create a product
        </Link>
      </div>
      {isLoading && <Loader />}
      {isError && <Error />}
      {isSuccess && (
        <div className="my-5">
          <h1>Select a product to edit</h1>
          <form
            onSubmit={(e) => {
              handleSubmitProduct(e);
            }}
          >
            <select className="form-select" name="selectedProduct">
              {products.map((product) => {
                return (
                  <option key={product.id} value={product.id}>
                    id: {product.id} | title: {product.title}
                  </option>
                );
              })}
            </select>
            <button type="submit" className="btn btn-primary">
              Edit product
            </button>
          </form>
        </div>
      )}

      <Link to="/categories/create" className="btn btn-primary">
        Create a category
      </Link>
      <Link to="/categories/edit/:id" className="btn btn-primary">
        Edit a category
      </Link>
    </div>
  );
}

export default Admin;
