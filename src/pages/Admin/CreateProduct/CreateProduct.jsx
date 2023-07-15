import { useMutation } from "react-query";

function CreateProduct() {
  const createProductMutation = useMutation(
    (data) => {
      return fetch("https://api.escuelajs.co/api/v1/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      });
    },
    {
      onSuccess: () => {},
    },
    {
      onError: () => {
        // TODO: do something
      },
    }
  );

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
      images = formData.get("images");
    }
    let productData = { title, price, description, images, categoryId };
    createProductMutation.mutate(productData);
  }

  return (
    <>
      <div className="container-fluid my-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-8 d-flex flex-column justify-content-center p-4 bg-white">
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
              <input
                type="text"
                placeholder="Description"
                className="form-control form-control-lg mb-3"
                name="description"
              ></input>
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
