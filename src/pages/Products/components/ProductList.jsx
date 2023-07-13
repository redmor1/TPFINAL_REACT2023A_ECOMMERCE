import Product from "./Product";

function ProductList(props) {
  return (
    <>
      <div className="col-12 flex-wrap d-flex justify-content-evenly">
        {props.products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image={product.images}
              title={product.title}
              price={product.price}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="btn border-1 border-black rounded-0 fw-semibold btn-3"
      >
        Load more products
      </button>
    </>
  );
}

export default ProductList;
