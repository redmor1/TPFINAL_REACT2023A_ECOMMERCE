import { useState } from "react";
import useCreateProduct from "../../../hooks/useCreateProduct";
import Alert from "../../../components/Alert";

function CreateProduct() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const createProductMutation = useCreateProduct(setError, setSuccess);

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
    createProductMutation.mutate(productData);
  }

  return (
    <>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
            {success && <Alert alertText={success} state={"success"} />}
            {!success && error && <Alert alertText={error} state={"error"} />}
            <h1 className="mt-0">Create a product</h1>
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
              {/* TODO: improve by making it fetch list of categories, then being able to select it */}
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
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
