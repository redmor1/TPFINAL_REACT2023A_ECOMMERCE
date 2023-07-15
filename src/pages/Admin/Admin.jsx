import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "../../functions/fetchData";
import {
  API_URL,
  QUERY_KEY_CATEGORIES,
  QUERY_KEY_PRODUCTS,
} from "../../constants";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

function Admin() {
  const navigate = useNavigate();

  // fetch products
  const productsQuery = useQuery([QUERY_KEY_PRODUCTS], () => {
    return fetchData(API_URL, "/products");
  });

  // fetch categories
  const categoriesQuery = useQuery([QUERY_KEY_CATEGORIES], () => {
    return fetchData(API_URL, "/categories");
  });

  function handleSubmitProduct(e) {
    e.preventDefault();
    const selectedProduct = e.target.selectedProduct.value;
    navigate(`/products/edit/${selectedProduct}`);
  }

  function handleSubmitCategory(e) {
    e.preventDefault();
    const selectedCategory = e.target.selectedCategory.value;
    navigate(`/categories/edit/${selectedCategory}`);
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
      {productsQuery.isLoading && <Loader />}
      {productsQuery.isError && <Error />}
      {productsQuery.isSuccess && (
        <div className="my-5">
          <h1>Select a product to edit</h1>
          <form
            onSubmit={(e) => {
              handleSubmitProduct(e);
            }}
          >
            <select className="form-select" name="selectedProduct">
              {productsQuery.data.map((product) => {
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

      <div className="my-5">
        <h1>Create a category</h1>
        <Link to="/categories/create" className="btn btn-primary">
          Create a category
        </Link>
      </div>

      {categoriesQuery.isLoading && <Loader />}
      {categoriesQuery.isError && <Error />}
      {categoriesQuery.isSuccess && (
        <div className="my-5">
          <h1>Select a category to edit</h1>
          <form
            onSubmit={(e) => {
              handleSubmitCategory(e);
            }}
          >
            <select className="form-select" name="selectedCategory">
              {categoriesQuery.data.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    id: {category.id} | name: {category.name}
                  </option>
                );
              })}
            </select>
            <button type="submit" className="btn btn-primary">
              Edit category
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
