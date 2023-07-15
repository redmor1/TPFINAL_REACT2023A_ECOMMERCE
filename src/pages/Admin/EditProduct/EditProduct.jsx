import useEditProduct from "../../../hooks/useEditProduct";

function EditProduct() {
  const editProductMutation = useEditProduct();

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let title = formData.get("title");
    let price = formData.get("price");
    let description = formData.get("description");
    let categoryId = formData.get("categoryId");
    let images;
    if (formData.get("images") == "") {
      images = ["https://placehold.co/300x300/EEE/31343C"];
    } else {
      images = [formData.get("images")];
    }
    let productData = { title, price, description, images, categoryId };
    editProductMutation.mutate(productData);
  }

  // mutation product with this id

  return (
    <>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
            <h1 className="mt-0">Edit product</h1>
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <input
                type="text"
                placeholder="Title"
                className="form-control form-control-lg mb-3"
                name="title"
              ></input>
              <input
                type="number"
                placeholder="Price"
                className="form-control form-control-lg mb-3"
                name="price"
              ></input>
              <textarea
                placeholder="Description"
                className="form-control form-control-lg mb-3"
                name="description"
                rows="5"
              ></textarea>
              <input
                type="number"
                placeholder="Category Id"
                className="form-control form-control-lg mb-3"
                name="categoryId"
              ></input>
              <input
                type="url"
                placeholder="Image URL"
                className="form-control form-control-lg mb-3"
                name="images"
              ></input>

              <button type="submit" className="btn btn-primary mb-3">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
