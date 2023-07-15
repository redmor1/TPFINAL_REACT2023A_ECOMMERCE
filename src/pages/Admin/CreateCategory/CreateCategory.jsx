import useCreateCategory from "../../../hooks/useCreateCategory";

function CreateCategory() {
  const createCategoryMutation = useCreateCategory();

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let name = formData.get("name");
    let image = formData.get("image");
    let categoryData = { name, image };
    createCategoryMutation.mutate(categoryData);
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
                placeholder="Name"
                className="form-control form-control-lg mb-3"
                name="name"
              ></input>
              <input
                type="url"
                placeholder="Image URL"
                className="form-control form-control-lg mb-3"
                name="image"
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

export default CreateCategory;
